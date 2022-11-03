const codeWords = new Map<bigint, string[]>();

export const generateCodeWord = async (projectId: bigint) => {
  const response = await fetch(
    'http://free-generator.ru/generator.php?action=word&type=1',
  );

  const codeWord = (await response.json()).word.word as string;
  const projectCodeWords = codeWords.get(projectId);

  if (projectCodeWords) projectCodeWords.push(codeWord);
  else codeWords.set(projectId, [codeWord]);

  return codeWord;
};

export const useCodeWord = (projectId: bigint, codeWord: string) => {
  const projectCodeWords = codeWords.get(projectId);
  if (!projectCodeWords) return false;

  const codeWordIndex = projectCodeWords.indexOf(codeWord.toLowerCase());
  if (codeWordIndex === -1) return false;

  projectCodeWords.splice(codeWordIndex, 1);
  return true;
};

export const getCodeWordList = (projectId: bigint) =>
  codeWords.get(projectId) || [];
