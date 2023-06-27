import { Avatar } from '../../../../../../../components/Avatar';
import { ArrowSquareOut } from '../../../../../../../components/PhosphorIcons';
import Styles from './ClientsListItem.module.sass';

export function ClientsListItem({ userName, userAvatarUrl, onClick }) {
  return (
    <div className={Styles.ClientsListItem} onClick={onClick}>
      <div>
        <Avatar userName={userName} avatarUrl={userAvatarUrl} size='sm' />
        <span>
          {userName}
        </span>
      </div>
      <ArrowSquareOut className={Styles.ClientsListItemIcon} />
    </div>
  )
}