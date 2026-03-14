export type IconName =
  'cross-filled'
  | 'cross-outlined'
  | 'star-outlined'
  | 'star-filled'
  | 'phone'
  | 'map-marker-outlined'
  | 'route'
  | 'email'
  | 'arrow-right'
  | 'airplane'
  | 'heart-filled'
  | 'arrow-left'
  | 'minus-outlined'
  | 'plus-outlined'
  | 'phone'
  | 'loading'
  | 'check'
  | 'coin'
  | 'light'
  | 'flag'
  | 'eye-open'
  | 'message-filled'
  | 'share'
  | 'eye-closed'
  | 'bag'
  | 'heart-outlined'
  | 'message-outlined'
  | 'lightning'
  | 'image'
  | 'bell'
  | 'edit'
  | 'close'
  | 'crown'
  | 'check-filled'
  | 'small-chevron-down'
  | 'filter-search'
  | 'play'
  | 'minus'
  | 'plus'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-right'
  | 'chevron-left'
  | 'location'
  | 'smile'
  | 'car'
  | 'facebook'
  | 'calendar'
  | 'twitter'
  | 'user'
  | 'instagram'
  | 'globe'
  | 'behance'
  | 'search'
  | 'dribble'


export interface Icon {
  name: IconName
  path: string | string[]
  viewBox: string
}

export const icons: Icon[] = [
  {
    name: 'cross-filled',
    path: `
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#777E91"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z" fill="#FCFCFD"/>
    `,
    viewBox: '0 0 24 24',
  },
  {
    name: 'star-outlined',
    path: `
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52245 8.93361C9.42141 9.17558 9.19361 9.3408 8.93222 9.36167L4.18295 9.74094C3.56153 9.79057 3.31008 10.5666 3.7843 10.9712L7.39873 14.0554C7.59895 14.2262 7.68641 14.4949 7.62512 14.7509L6.52015 19.3652C6.37521 19.9704 7.03306 20.4497 7.56475 20.1262L11.6362 17.649C11.8597 17.5131 12.1403 17.5131 12.3638 17.649L16.4353 20.1262C16.9669 20.4497 17.6248 19.9704 17.4799 19.3652L16.3749 14.7509C16.3136 14.4949 16.4011 14.2262 16.6013 14.0554L20.2157 10.9712C20.6899 10.5666 20.4385 9.79057 19.8171 9.74094L15.0678 9.36167C14.8064 9.3408 14.5786 9.17558 14.4776 8.93361L12.646 4.54699C12.4064 3.97327 11.5936 3.97327 11.354 4.54699L9.52245 8.93361ZM16.0176 7.43115L14.4915 3.77638C13.5675 1.56346 10.4324 1.56348 9.50847 3.77638L7.98244 7.43115L4.02374 7.74729C1.62681 7.9387 0.656965 10.9318 2.48611 12.4926L5.49461 15.0597L4.57514 18.8994C4.0161 21.234 6.55353 23.0826 8.60431 21.8348L12 19.7688L15.3957 21.8348C17.4465 23.0826 19.9839 21.2339 19.4249 18.8994L18.5054 15.0597L21.5139 12.4926C23.3431 10.9318 22.3732 7.9387 19.9763 7.74729L16.0176 7.43115Z" />
    `,
    viewBox: '0 0 24 24',
  }
]