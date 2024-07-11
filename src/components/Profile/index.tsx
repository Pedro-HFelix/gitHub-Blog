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
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Profile {
  name: string
  bio: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
  login: string
}

export function Profile() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  async function searchGitHubProfile() {
    const response = await api.get('/users/Pedro-HFelix')
    const data = await response.data
    setProfile(data)
  }

  useEffect(() => {
    searchGitHubProfile()
  }, [])

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="Profile Image" />

      <ProfileContent>
        <ProfileHeader>
          <h2>{profile.name}</h2>
          <section>
            <a href={profile.html_url}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </section>
        </ProfileHeader>

        <ProfileDescription>{profile.bio}</ProfileDescription>

        <ProfileInfo>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            {profile.company}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} seguidoeres
          </p>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
