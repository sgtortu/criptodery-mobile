/* GENERIC */
export const whitespaceOrEmpty = /^$|\s+/;

/* SPECIFICS */
export const regexEmail =
  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const stringWithoutSpaces = /^\S*$/;
export const stringWithUpperChar = /(?=.*?[A-Z])/;
export const stringWithLowerChar = /(?=.*?[a-z])/;

export const regexDni = /^[0-9]{1,8}$/;

export const stringWithOnlyLetters =
  /^([a-zA-ZÑÁÉÍÓÚñáéíóú]+\s)*[a-zA-ZÑÁÉÍÓÚñáéíóú]+$/;

export const regexBirthday = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
