import { useReducer, useCallback } from 'react';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
} as const;

export type UseMutationStatus = (typeof Status)[keyof typeof Status];

export const ActionType = {
  MUTATE: 'mutate',
  RESOLVE: 'resolve',
  REJECT: 'reject',
} as const;

export type UseMutationState<T> = {
  status: UseMutationStatus;
  data?: T;
  error?: string;
};

export type UseMutationAction<T> =
  | {
      type: typeof ActionType.MUTATE;
    }
  | {
      type: typeof ActionType.RESOLVE;
      payload: T;
    }
  | {
      type: typeof ActionType.REJECT;
      payload: string;
    };

function useMutationReducer<T>(
  state: UseMutationState<T>,
  action: UseMutationAction<T>,
): UseMutationState<T> {
  switch (action.type) {
    case ActionType.MUTATE:
      return { ...state, status: Status.PENDING };
    case ActionType.RESOLVE:
      return { ...state, status: Status.RESOLVED, data: action.payload };
    case ActionType.REJECT:
      return { ...state, status: Status.REJECTED, error: action.payload };
    default:
      return state;
  }
}

const initialState = {
  status: Status.IDLE,
  data: undefined,
  error: '',
} as const;

export type UseMutationProps<T> = {
  mutationFn: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

/**
 * A hook to handle mutations.
 * @param mutationFn - The function that performs the mutation.
 * @param onSuccess - A function that will be called when the mutation is successful.
 * @param onError - A function that will be called when the mutation fails.
 * @returns An object with the current status of the mutation and a function to trigger the mutation.
 *
 * @example
 * const { mutate, status, data, error, isIdle, isPending, isResolved, isRejected } = useMutation({
 *   mutationFn: () => fetch('/api/order', { method: 'POST' }),
 *   onSuccess: (data) => console.log('Order placed:', data),
 *   onError: (error) => console.error('Failed to place order:', error),
 * });
 */
export function useMutation<T>({
  mutationFn,
  onSuccess,
  onError,
}: UseMutationProps<T>) {
  const [state, dispatch] = useReducer(useMutationReducer<T>, initialState);

  const mutate = useCallback(async () => {
    const promise = mutationFn();

    if (!promise || typeof promise.then !== 'function') {
      throw new Error(
        "The mutationFn must return a promise. Maybe you're passing a function that isn't returning anything?",
      );
    }

    dispatch({ type: ActionType.MUTATE });

    try {
      const data = await promise;

      dispatch({ type: ActionType.RESOLVE, payload: data });
      onSuccess?.(data);
    } catch (error) {
      const resolvedError = (error as Error) ?? new Error('Unknown error');
      let { message } = resolvedError;

      if (!message) {
        message = 'Faild to place order';
      }

      dispatch({ type: ActionType.REJECT, payload: message });
      onError?.(resolvedError);
    }
  }, [mutationFn, onError, onSuccess]);

  return {
    mutate,
    ...state,
    // convenience helpers
    isIdle: state.status === Status.IDLE,
    isPending: state.status === Status.PENDING,
    isResolved: state.status === Status.RESOLVED,
    isRejected: state.status === Status.REJECTED,
  };
}
