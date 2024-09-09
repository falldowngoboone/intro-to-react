#!/usr/bin/env node

import { spawnSync, getExerciseBranches } from './scripts/utils.js';

const currentBranch = spawnSync('git rev-parse --abbrev-ref HEAD');

async function go() {
  // if we're on main then you can't do anything else
  await changeExercise();
  return;
}

function getDisplayName(exerciseBranch) {
  // TODO: figure out the \d\db format...
  const match = exerciseBranch.match(
    /exercises\/(?<number>\d\d)-(?<title>.*?)$/,
  );
  const title = match.groups.title.split('-').join(' ');
  const capitalizedTitle = title.slice(0, 1).toUpperCase() + title.slice(1);
  return `${match.groups.number}. ${capitalizedTitle}`;
}

async function changeExercise() {
  const { branch } = await (
    await import('inquirer')
  ).default.prompt([
    {
      name: 'branch',
      message: `Which exercise do you want to start working on?`,
      type: 'list',
      default: currentBranch,
      choices: [
        { name: 'Return to main', value: 'main' },
        ...getExerciseBranches().map((b) => ({
          name: getDisplayName(b),
          value: b,
        })),
      ],
    },
  ]);
  spawnSync('git add -A');
  spawnSync('git reset --hard HEAD');
  spawnSync(`git checkout ${branch}`);
  if (branch.startsWith('exercises/')) {
    spawnSync('node ./scripts/swap exercise');
  }
  console.log(`✅  Ready to start work in ${branch}`);
}

go();
