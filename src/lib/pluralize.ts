/**
 * Returns the singular or plural form of a word based on the count.
 * @param count The count to determine the form of the word.
 * @param singular The singular form of the word.
 * @param plural The plural form of the word.
 * @returns The singular or plural form of the word.
 *
 * @example
 * pluralize(1, 'item', 'items'); // 'item'
 * pluralize(2, 'item', 'items'); // 'items'
 * pluralize(0, 'item', 'items'); // 'items'
 */
function pluralize(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}

export { pluralize };
