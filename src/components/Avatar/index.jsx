import Image from "next/image";

import Styles from './Avatar.module.sass';

function extractNameInitials(name, initialsMax) {
  const nameCharacterArray = name.split('');

  const whiteSpacesIndexes = nameCharacterArray.reduce(
    (acc, character, index) => (character === ' ' ? [...acc, index] : acc),
    [],
  );

  const initials = whiteSpacesIndexes.reduce(
    (acc, index, currentIndex) =>
      currentIndex === initialsMax - 1
        ? acc
        : acc + nameCharacterArray[index + 1].toUpperCase(),
    nameCharacterArray[0].toUpperCase(),
  );

  return initials;
}

export function Avatar({ avatarUrl, userName, size = "md", outlined = false }) {
  return (
    <div data-size={size} data-outlined={outlined} className={Styles.AvatarContainer}>
      {
        avatarUrl ?
          <Image src={avatarUrl} width={36} height={36} alt="Avatar do Usuário" className={Styles.AvatarImage} />
          :
          <span className={Styles.AvatarPlaceholder}>{userName ? extractNameInitials(userName) : "?"}</span>
      }
    </div>
  )
}