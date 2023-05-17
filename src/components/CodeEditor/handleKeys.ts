export interface HandleKeys {
  editor: HTMLTextAreaElement;
  e: KeyboardEvent;
}

export const handleKeys = ({ editor, e }: HandleKeys) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 1;
  } else if (e.key === '{') {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '{}' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 1;
  } else if (e.key === '"') {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '""' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 1;
  } else if (e.key === 'Enter') {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;

    const startSelection = editor.value.substring(0, start);
    const endSelection = editor.value.substring(end);

    if (startSelection.endsWith('{') && endSelection.startsWith('}')) {
      e.preventDefault();
      editor.value = startSelection + '\n  \n' + endSelection;
      editor.selectionStart = editor.selectionEnd = start + 2;
    }
  }
};
