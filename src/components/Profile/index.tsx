import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ProfileContainer,
  ProfileContent,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/108374688?v=4"
        alt="Profile Image"
      />

      <ProfileContent>
        <ProfileHeader>
          <h2>Pedro</h2>
          <section>
            <a href="">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </section>
        </ProfileHeader>

        <ProfileDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          dolorem dolore rem est asperiores autem dignissimos iste laudantium?
          Vel rem quibusdam corporis ea voluptate eius nemo consectetur dolore
          vitae omnis!
        </ProfileDescription>

        <ProfileInfo>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            Pedro
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            Puc Minas
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            200 seguidoeres
          </p>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
