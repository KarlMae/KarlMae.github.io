import React from 'react'
import './styles.sass'

function Section(props) {

  const {className} = props

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )
  }

  const line = () => {
    return (
      <svg
        width={getWidth()}
        height={1}
        viewBox={`0 0 ${getWidth()} ${1}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="section-box"
          d={`M0 0 L${getWidth()} 0`}
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeDasharray={getWidth()}
          strokeDashoffset={getWidth()}
        >
        </path>
      </svg>
    )
  }

  const lineBackwards = () => {
    return (
      <svg
        width={getWidth()}
        height={1}
        viewBox={`0 0 ${getWidth()} ${1}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="section-box-backwards"
          d={`M${getWidth()} 0 L0 0`}
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeDasharray={getWidth()}
          strokeDashoffset={getWidth()}
        >
        </path>
      </svg>
    )
  }

  return (
    <div className={'flex column section ' + className}>
      {line()}
      <div className="section-element flex row">
        <div className="flex column mr-2">
          <svg className="mb-3" width="87" height="35" viewBox="0 0 87 35" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.9 30.35H19.25V34H0.85V0.299999H4.9V30.35ZM38.1281 22.3H33.7281C31.5948 22.3 29.9948 22.7167 28.9281 23.55C27.8615 24.3833 27.3281 25.4333 27.3281 26.7C27.3281 27.9667 27.7448 29 28.5781 29.8C29.4115 30.5667 30.6281 30.95 32.2281 30.95C34.0281 30.95 35.4615 30.45 36.5281 29.45C37.5948 28.4167 38.1281 27.1167 38.1281 25.55V22.3ZM25.0281 13.95V10C26.9281 8.83333 29.4281 8.25 32.5281 8.25C38.8948 8.25 42.0781 11.4833 42.0781 17.95V34H38.1781V31C36.8781 33.1667 34.5115 34.25 31.0781 34.25C28.7115 34.25 26.7948 33.55 25.3281 32.15C23.8948 30.75 23.1781 28.9833 23.1781 26.85C23.1781 24.4167 24.0948 22.5333 25.9281 21.2C27.7948 19.8333 30.3281 19.15 33.5281 19.15H38.1281V17.85C38.1281 15.85 37.6781 14.35 36.7781 13.35C35.8781 12.3167 34.3615 11.8 32.2281 11.8C29.5281 11.8 27.1281 12.5167 25.0281 13.95ZM62.7375 22.3H58.3375C56.2042 22.3 54.6042 22.7167 53.5375 23.55C52.4708 24.3833 51.9375 25.4333 51.9375 26.7C51.9375 27.9667 52.3542 29 53.1875 29.8C54.0208 30.5667 55.2375 30.95 56.8375 30.95C58.6375 30.95 60.0708 30.45 61.1375 29.45C62.2042 28.4167 62.7375 27.1167 62.7375 25.55V22.3ZM49.6375 13.95V10C51.5375 8.83333 54.0375 8.25 57.1375 8.25C63.5042 8.25 66.6875 11.4833 66.6875 17.95V34H62.7875V31C61.4875 33.1667 59.1208 34.25 55.6875 34.25C53.3208 34.25 51.4042 33.55 49.9375 32.15C48.5042 30.75 47.7875 28.9833 47.7875 26.85C47.7875 24.4167 48.7042 22.5333 50.5375 21.2C52.4042 19.8333 54.9375 19.15 58.1375 19.15H62.7375V17.85C62.7375 15.85 62.2875 14.35 61.3875 13.35C60.4875 12.3167 58.9708 11.8 56.8375 11.8C54.1375 11.8 51.7375 12.5167 49.6375 13.95ZM79.1469 11.85V26.7C79.1469 29.4 80.4135 30.75 82.9469 30.75C84.2469 30.75 85.3969 30.3667 86.3969 29.6V33.35C85.2969 33.95 84.0635 34.25 82.6969 34.25C77.6969 34.25 75.1969 31.7 75.1969 26.6V11.85H71.1469V8.65H75.1969V2.35H79.1469V8.65H86.1469V11.85H79.1469Z"
              stroke="#aaaaaa"
              strokeWidth=".5"
              className="path"
            />
          </svg>

          <svg width="393" height="23" viewBox="0 0 393 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.392 2.472V4.464C11.688 4.096 11.056 3.832 10.496 3.672C9.936 3.512 9.2 3.432 8.288 3.432C6.544 3.432 5.088 4.024 3.92 5.208C2.768 6.392 2.192 7.936 2.192 9.84C2.192 11.824 2.768 13.408 3.92 14.592C5.072 15.776 6.6 16.368 8.504 16.368C10.04 16.368 11.352 15.96 12.44 15.144V17.184C11.448 17.856 10.088 18.192 8.36 18.192C5.928 18.192 3.952 17.448 2.432 15.96C0.912 14.456 0.152 12.416 0.152 9.84C0.152 7.408 0.92 5.432 2.456 3.912C4.008 2.376 5.952 1.608 8.288 1.608C9.968 1.608 11.336 1.896 12.392 2.472ZM17.0615 5.832V7.968C17.7015 6.464 18.8055 5.712 20.3735 5.712C20.6615 5.712 20.8855 5.728 21.0455 5.76V7.632C20.7095 7.52 20.3655 7.464 20.0135 7.464C19.1655 7.464 18.4615 7.856 17.9015 8.64C17.3415 9.424 17.0615 10.328 17.0615 11.352V18H15.1655L15.1895 5.832H17.0615ZM30.7696 11.136V10.656C30.7696 9.648 30.4976 8.848 29.9536 8.256C29.4096 7.648 28.6576 7.344 27.6976 7.344C26.7856 7.344 26.0096 7.672 25.3696 8.328C24.7296 8.984 24.3536 9.92 24.2416 11.136H30.7696ZM31.8976 15.6V17.376C30.9536 17.872 29.8016 18.12 28.4416 18.12C26.6016 18.12 25.1136 17.56 23.9776 16.44C22.8576 15.304 22.2976 13.808 22.2976 11.952C22.2976 10.016 22.8016 8.488 23.8096 7.368C24.8176 6.248 26.1136 5.688 27.6976 5.688C29.2176 5.688 30.4256 6.176 31.3216 7.152C32.2176 8.128 32.6656 9.512 32.6656 11.304C32.6656 11.816 32.6256 12.288 32.5456 12.72H24.2416C24.3856 13.92 24.8416 14.84 25.6096 15.48C26.3776 16.12 27.3856 16.44 28.6336 16.44C29.9936 16.44 31.0816 16.16 31.8976 15.6ZM42.1087 12.384H39.9967C38.9727 12.384 38.2047 12.584 37.6927 12.984C37.1807 13.384 36.9247 13.888 36.9247 14.496C36.9247 15.104 37.1247 15.6 37.5247 15.984C37.9247 16.352 38.5087 16.536 39.2767 16.536C40.1407 16.536 40.8287 16.296 41.3407 15.816C41.8527 15.32 42.1087 14.696 42.1087 13.944V12.384ZM35.8207 8.376V6.48C36.7327 5.92 37.9327 5.64 39.4207 5.64C42.4767 5.64 44.0047 7.192 44.0047 10.296V18H42.1327V16.56C41.5087 17.6 40.3727 18.12 38.7247 18.12C37.5887 18.12 36.6687 17.784 35.9647 17.112C35.2767 16.44 34.9327 15.592 34.9327 14.568C34.9327 13.4 35.3727 12.496 36.2527 11.856C37.1487 11.2 38.3647 10.872 39.9007 10.872H42.1087V10.248C42.1087 9.288 41.8927 8.568 41.4607 8.088C41.0287 7.592 40.3007 7.344 39.2767 7.344C37.9807 7.344 36.8287 7.688 35.8207 8.376ZM49.9852 7.368V14.496C49.9852 15.792 50.5932 16.44 51.8092 16.44C52.4332 16.44 52.9852 16.256 53.4652 15.888V17.688C52.9372 17.976 52.3452 18.12 51.6892 18.12C49.2892 18.12 48.0892 16.896 48.0892 14.448V7.368H46.1452V5.832H48.0892V2.808H49.9852V5.832H53.3452V7.368H49.9852ZM56.3246 18V5.832H58.2206V18H56.3246ZM56.3726 2.904C56.1486 2.664 56.0366 2.368 56.0366 2.016C56.0366 1.664 56.1486 1.368 56.3726 1.128C56.6126 0.887999 56.9086 0.767999 57.2606 0.767999C57.6126 0.767999 57.9086 0.887999 58.1486 1.128C58.3886 1.368 58.5086 1.664 58.5086 2.016C58.5086 2.368 58.3886 2.664 58.1486 2.904C57.9086 3.128 57.6126 3.24 57.2606 3.24C56.9086 3.24 56.6126 3.128 56.3726 2.904ZM63.7021 5.832V7.944C64.4221 6.424 65.7021 5.664 67.5421 5.664C68.7261 5.664 69.6701 6.024 70.3741 6.744C71.0781 7.464 71.4301 8.424 71.4301 9.624V18H69.5341V10.128C69.5341 9.232 69.3021 8.552 68.8381 8.088C68.3901 7.608 67.7981 7.368 67.0621 7.368C66.1501 7.368 65.3581 7.72 64.6861 8.424C64.0301 9.128 63.7021 10.104 63.7021 11.352V18H61.8301V5.832H63.7021ZM79.3511 16.008C80.2311 16.008 81.0071 15.672 81.6791 15C82.3671 14.312 82.7111 13.296 82.7111 11.952C82.7111 10.4 82.3831 9.248 81.7271 8.496C81.0711 7.744 80.3111 7.368 79.4471 7.368C78.4071 7.368 77.5831 7.784 76.9751 8.616C76.3671 9.432 76.0631 10.504 76.0631 11.832C76.0631 13.192 76.3991 14.232 77.0711 14.952C77.7431 15.656 78.5031 16.008 79.3511 16.008ZM82.7111 5.832H84.6071V17.016C84.6071 18.872 84.0951 20.264 83.0711 21.192C82.0471 22.136 80.7271 22.608 79.1111 22.608C77.6391 22.608 76.3831 22.36 75.3431 21.864V19.968C76.3671 20.56 77.5671 20.856 78.9431 20.856C80.1111 20.856 81.0311 20.544 81.7031 19.92C82.3751 19.296 82.7111 18.32 82.7111 16.992V15.624C81.9111 17 80.7191 17.688 79.1351 17.688C77.7431 17.688 76.5511 17.176 75.5591 16.152C74.5831 15.128 74.0951 13.704 74.0951 11.88C74.0951 10.072 74.5511 8.584 75.4631 7.416C76.3751 6.248 77.5671 5.664 79.0391 5.664C80.7031 5.664 81.9271 6.392 82.7111 7.848V5.832ZM100.374 12.384H98.2623C97.2383 12.384 96.4703 12.584 95.9583 12.984C95.4463 13.384 95.1903 13.888 95.1903 14.496C95.1903 15.104 95.3903 15.6 95.7903 15.984C96.1903 16.352 96.7743 16.536 97.5423 16.536C98.4063 16.536 99.0943 16.296 99.6063 15.816C100.118 15.32 100.374 14.696 100.374 13.944V12.384ZM94.0863 8.376V6.48C94.9983 5.92 96.1983 5.64 97.6863 5.64C100.742 5.64 102.27 7.192 102.27 10.296V18H100.398V16.56C99.7743 17.6 98.6383 18.12 96.9903 18.12C95.8543 18.12 94.9343 17.784 94.2303 17.112C93.5423 16.44 93.1983 15.592 93.1983 14.568C93.1983 13.4 93.6383 12.496 94.5183 11.856C95.4143 11.2 96.6303 10.872 98.1663 10.872H100.374V10.248C100.374 9.288 100.158 8.568 99.7263 8.088C99.2943 7.592 98.5663 7.344 97.5423 7.344C96.2463 7.344 95.0943 7.688 94.0863 8.376ZM107.507 5.832V7.944C108.227 6.424 109.507 5.664 111.347 5.664C112.531 5.664 113.475 6.024 114.179 6.744C114.883 7.464 115.235 8.424 115.235 9.624V18H113.339V10.128C113.339 9.232 113.107 8.552 112.643 8.088C112.195 7.608 111.603 7.368 110.867 7.368C109.955 7.368 109.163 7.72 108.491 8.424C107.835 9.128 107.507 10.104 107.507 11.352V18H105.635V5.832H107.507ZM132.207 11.136V10.656C132.207 9.648 131.935 8.848 131.391 8.256C130.847 7.648 130.095 7.344 129.135 7.344C128.223 7.344 127.447 7.672 126.807 8.328C126.167 8.984 125.791 9.92 125.679 11.136H132.207ZM133.335 15.6V17.376C132.391 17.872 131.239 18.12 129.879 18.12C128.039 18.12 126.551 17.56 125.415 16.44C124.295 15.304 123.735 13.808 123.735 11.952C123.735 10.016 124.239 8.488 125.247 7.368C126.255 6.248 127.551 5.688 129.135 5.688C130.655 5.688 131.863 6.176 132.759 7.152C133.655 8.128 134.103 9.512 134.103 11.304C134.103 11.816 134.063 12.288 133.983 12.72H125.679C125.823 13.92 126.279 14.84 127.047 15.48C127.815 16.12 128.823 16.44 130.071 16.44C131.431 16.44 132.519 16.16 133.335 15.6ZM136.61 12.384V10.728H142.226V12.384H136.61ZM151.962 6.24V8.04C151.226 7.592 150.218 7.368 148.938 7.368C148.298 7.368 147.786 7.52 147.402 7.824C147.034 8.112 146.85 8.488 146.85 8.952C146.85 9.24 146.906 9.496 147.018 9.72C147.13 9.928 147.346 10.136 147.666 10.344C148.002 10.552 148.242 10.696 148.386 10.776C148.546 10.84 148.882 10.984 149.394 11.208C150.418 11.624 151.218 12.096 151.794 12.624C152.37 13.152 152.658 13.864 152.658 14.76C152.658 15.8 152.29 16.624 151.554 17.232C150.834 17.84 149.842 18.144 148.578 18.144C147.106 18.144 145.914 17.896 145.002 17.4V15.552C146.074 16.192 147.226 16.512 148.458 16.512C149.194 16.512 149.754 16.368 150.138 16.08C150.522 15.792 150.714 15.4 150.714 14.904C150.714 14.328 150.498 13.88 150.066 13.56C149.65 13.24 148.946 12.88 147.954 12.48C147.042 12.128 146.306 11.688 145.746 11.16C145.202 10.632 144.93 9.92 144.93 9.024C144.93 8.016 145.306 7.216 146.058 6.624C146.826 6.016 147.778 5.712 148.914 5.712C150.178 5.712 151.194 5.888 151.962 6.24ZM157.101 1.032V7.944C157.821 6.424 159.101 5.664 160.941 5.664C162.109 5.664 163.045 6.024 163.749 6.744C164.469 7.464 164.829 8.44 164.829 9.672V18H162.933V10.128C162.933 9.248 162.701 8.568 162.237 8.088C161.789 7.608 161.197 7.368 160.461 7.368C159.565 7.368 158.781 7.712 158.109 8.4C157.437 9.088 157.101 10.072 157.101 11.352V18H155.229V1.032H157.101ZM173.134 18.216C171.39 18.216 170.006 17.632 168.982 16.464C167.974 15.28 167.47 13.792 167.47 12C167.47 10.192 167.99 8.688 169.03 7.488C170.086 6.272 171.454 5.664 173.134 5.664C174.974 5.664 176.39 6.256 177.382 7.44C178.39 8.624 178.894 10.128 178.894 11.952C178.894 13.76 178.382 15.256 177.358 16.44C176.334 17.624 174.926 18.216 173.134 18.216ZM173.134 7.344C171.982 7.344 171.078 7.792 170.422 8.688C169.766 9.584 169.438 10.68 169.438 11.976C169.438 13.24 169.774 14.32 170.446 15.216C171.118 16.096 172.014 16.536 173.134 16.536C174.35 16.536 175.286 16.104 175.942 15.24C176.598 14.36 176.926 13.272 176.926 11.976C176.926 10.632 176.614 9.528 175.99 8.664C175.366 7.784 174.414 7.344 173.134 7.344ZM187.018 16.464C188.042 16.464 188.882 16.064 189.538 15.264C190.194 14.448 190.522 13.296 190.522 11.808C190.522 10.48 190.202 9.408 189.562 8.592C188.922 7.776 188.114 7.368 187.138 7.368C186.162 7.368 185.314 7.728 184.594 8.448C183.89 9.152 183.538 10.312 183.538 11.928C183.538 13.48 183.898 14.624 184.618 15.36C185.338 16.096 186.138 16.464 187.018 16.464ZM183.538 5.832V7.68C184.386 6.32 185.642 5.64 187.306 5.64C188.922 5.64 190.186 6.232 191.098 7.416C192.026 8.584 192.49 10.048 192.49 11.808C192.49 13.68 192.002 15.216 191.026 16.416C190.066 17.6 188.81 18.192 187.258 18.192C185.658 18.192 184.418 17.512 183.538 16.152V22.728H181.666V5.832H183.538ZM203.015 1.032V7.944C203.735 6.424 205.015 5.664 206.855 5.664C208.023 5.664 208.959 6.024 209.663 6.744C210.383 7.464 210.743 8.44 210.743 9.672V18H208.847V10.128C208.847 9.248 208.615 8.568 208.151 8.088C207.703 7.608 207.111 7.368 206.375 7.368C205.479 7.368 204.695 7.712 204.023 8.4C203.351 9.088 203.015 10.072 203.015 11.352V18H201.143V1.032H203.015ZM220.656 12.384H218.544C217.52 12.384 216.752 12.584 216.24 12.984C215.728 13.384 215.472 13.888 215.472 14.496C215.472 15.104 215.672 15.6 216.072 15.984C216.472 16.352 217.056 16.536 217.824 16.536C218.688 16.536 219.376 16.296 219.888 15.816C220.4 15.32 220.656 14.696 220.656 13.944V12.384ZM214.368 8.376V6.48C215.28 5.92 216.48 5.64 217.968 5.64C221.024 5.64 222.552 7.192 222.552 10.296V18H220.68V16.56C220.056 17.6 218.92 18.12 217.272 18.12C216.136 18.12 215.216 17.784 214.512 17.112C213.824 16.44 213.48 15.592 213.48 14.568C213.48 13.4 213.92 12.496 214.8 11.856C215.696 11.2 216.912 10.872 218.448 10.872H220.656V10.248C220.656 9.288 220.44 8.568 220.008 8.088C219.576 7.592 218.848 7.344 217.824 7.344C216.528 7.344 215.376 7.688 214.368 8.376ZM232.54 6.24V8.04C231.804 7.592 230.796 7.368 229.516 7.368C228.876 7.368 228.364 7.52 227.98 7.824C227.612 8.112 227.428 8.488 227.428 8.952C227.428 9.24 227.484 9.496 227.596 9.72C227.708 9.928 227.924 10.136 228.244 10.344C228.58 10.552 228.82 10.696 228.964 10.776C229.124 10.84 229.46 10.984 229.972 11.208C230.996 11.624 231.796 12.096 232.372 12.624C232.948 13.152 233.236 13.864 233.236 14.76C233.236 15.8 232.868 16.624 232.132 17.232C231.412 17.84 230.42 18.144 229.156 18.144C227.684 18.144 226.492 17.896 225.58 17.4V15.552C226.652 16.192 227.804 16.512 229.036 16.512C229.772 16.512 230.332 16.368 230.716 16.08C231.1 15.792 231.292 15.4 231.292 14.904C231.292 14.328 231.076 13.88 230.644 13.56C230.228 13.24 229.524 12.88 228.532 12.48C227.62 12.128 226.884 11.688 226.324 11.16C225.78 10.632 225.508 9.92 225.508 9.024C225.508 8.016 225.884 7.216 226.636 6.624C227.404 6.016 228.356 5.712 229.492 5.712C230.756 5.712 231.772 5.888 232.54 6.24ZM243.538 5.832V7.944C244.258 6.424 245.538 5.664 247.378 5.664C248.562 5.664 249.506 6.024 250.21 6.744C250.914 7.464 251.266 8.424 251.266 9.624V18H249.37V10.128C249.37 9.232 249.138 8.552 248.674 8.088C248.226 7.608 247.634 7.368 246.898 7.368C245.986 7.368 245.194 7.72 244.522 8.424C243.866 9.128 243.538 10.104 243.538 11.352V18H241.666V5.832H243.538ZM262.379 11.136V10.656C262.379 9.648 262.107 8.848 261.563 8.256C261.019 7.648 260.267 7.344 259.307 7.344C258.395 7.344 257.619 7.672 256.979 8.328C256.339 8.984 255.963 9.92 255.851 11.136H262.379ZM263.507 15.6V17.376C262.563 17.872 261.411 18.12 260.051 18.12C258.211 18.12 256.723 17.56 255.587 16.44C254.467 15.304 253.907 13.808 253.907 11.952C253.907 10.016 254.411 8.488 255.419 7.368C256.427 6.248 257.723 5.688 259.307 5.688C260.827 5.688 262.035 6.176 262.931 7.152C263.827 8.128 264.275 9.512 264.275 11.304C264.275 11.816 264.235 12.288 264.155 12.72H255.851C255.995 13.92 256.451 14.84 257.219 15.48C257.987 16.12 258.995 16.44 260.243 16.44C261.603 16.44 262.691 16.16 263.507 15.6ZM270.262 18L266.014 5.832H267.982L269.662 10.968L271.438 16.512C271.582 15.824 272.182 13.976 273.238 10.968L274.966 5.832H276.934L272.59 18H270.262ZM287.035 11.136V10.656C287.035 9.648 286.763 8.848 286.219 8.256C285.675 7.648 284.923 7.344 283.963 7.344C283.051 7.344 282.275 7.672 281.635 8.328C280.995 8.984 280.619 9.92 280.507 11.136H287.035ZM288.163 15.6V17.376C287.219 17.872 286.067 18.12 284.707 18.12C282.867 18.12 281.379 17.56 280.243 16.44C279.123 15.304 278.563 13.808 278.563 11.952C278.563 10.016 279.067 8.488 280.075 7.368C281.083 6.248 282.379 5.688 283.963 5.688C285.483 5.688 286.691 6.176 287.587 7.152C288.483 8.128 288.931 9.512 288.931 11.304C288.931 11.816 288.891 12.288 288.811 12.72H280.507C280.651 13.92 281.107 14.84 281.875 15.48C282.643 16.12 283.651 16.44 284.899 16.44C286.259 16.44 287.347 16.16 288.163 15.6ZM293.694 5.832V7.968C294.334 6.464 295.438 5.712 297.006 5.712C297.294 5.712 297.518 5.728 297.678 5.76V7.632C297.342 7.52 296.998 7.464 296.646 7.464C295.798 7.464 295.094 7.856 294.534 8.64C293.974 9.424 293.694 10.328 293.694 11.352V18H291.798L291.822 5.832H293.694ZM308.126 7.368V14.496C308.126 15.792 308.734 16.44 309.95 16.44C310.574 16.44 311.126 16.256 311.606 15.888V17.688C311.078 17.976 310.486 18.12 309.83 18.12C307.43 18.12 306.23 16.896 306.23 14.448V7.368H304.286V5.832H306.23V2.808H308.126V5.832H311.486V7.368H308.126ZM316.241 1.032V7.944C316.961 6.424 318.241 5.664 320.081 5.664C321.249 5.664 322.185 6.024 322.889 6.744C323.609 7.464 323.969 8.44 323.969 9.672V18H322.073V10.128C322.073 9.248 321.841 8.568 321.377 8.088C320.929 7.608 320.337 7.368 319.601 7.368C318.705 7.368 317.921 7.712 317.249 8.4C316.577 9.088 316.241 10.072 316.241 11.352V18H314.369V1.032H316.241ZM327.426 18V5.832H329.322V18H327.426ZM327.474 2.904C327.25 2.664 327.138 2.368 327.138 2.016C327.138 1.664 327.25 1.368 327.474 1.128C327.714 0.887999 328.01 0.767999 328.362 0.767999C328.714 0.767999 329.01 0.887999 329.25 1.128C329.49 1.368 329.61 1.664 329.61 2.016C329.61 2.368 329.49 2.664 329.25 2.904C329.01 3.128 328.714 3.24 328.362 3.24C328.01 3.24 327.714 3.128 327.474 2.904ZM339.556 6.24V8.04C338.82 7.592 337.812 7.368 336.532 7.368C335.892 7.368 335.38 7.52 334.996 7.824C334.628 8.112 334.444 8.488 334.444 8.952C334.444 9.24 334.5 9.496 334.612 9.72C334.724 9.928 334.94 10.136 335.26 10.344C335.596 10.552 335.836 10.696 335.98 10.776C336.14 10.84 336.476 10.984 336.988 11.208C338.012 11.624 338.812 12.096 339.388 12.624C339.964 13.152 340.252 13.864 340.252 14.76C340.252 15.8 339.884 16.624 339.148 17.232C338.428 17.84 337.436 18.144 336.172 18.144C334.7 18.144 333.508 17.896 332.596 17.4V15.552C333.668 16.192 334.82 16.512 336.052 16.512C336.788 16.512 337.348 16.368 337.732 16.08C338.116 15.792 338.308 15.4 338.308 14.904C338.308 14.328 338.092 13.88 337.66 13.56C337.244 13.24 336.54 12.88 335.548 12.48C334.636 12.128 333.9 11.688 333.34 11.16C332.796 10.632 332.524 9.92 332.524 9.024C332.524 8.016 332.9 7.216 333.652 6.624C334.42 6.016 335.372 5.712 336.508 5.712C337.772 5.712 338.788 5.888 339.556 6.24ZM356.434 11.136V10.656C356.434 9.648 356.162 8.848 355.618 8.256C355.074 7.648 354.322 7.344 353.362 7.344C352.45 7.344 351.674 7.672 351.034 8.328C350.394 8.984 350.018 9.92 349.906 11.136H356.434ZM357.562 15.6V17.376C356.618 17.872 355.466 18.12 354.106 18.12C352.266 18.12 350.778 17.56 349.642 16.44C348.522 15.304 347.962 13.808 347.962 11.952C347.962 10.016 348.466 8.488 349.474 7.368C350.482 6.248 351.778 5.688 353.362 5.688C354.882 5.688 356.09 6.176 356.986 7.152C357.882 8.128 358.33 9.512 358.33 11.304C358.33 11.816 358.29 12.288 358.21 12.72H349.906C350.05 13.92 350.506 14.84 351.274 15.48C352.042 16.12 353.05 16.44 354.298 16.44C355.658 16.44 356.746 16.16 357.562 15.6ZM367.773 12.384H365.661C364.637 12.384 363.869 12.584 363.357 12.984C362.845 13.384 362.589 13.888 362.589 14.496C362.589 15.104 362.789 15.6 363.189 15.984C363.589 16.352 364.173 16.536 364.941 16.536C365.805 16.536 366.493 16.296 367.005 15.816C367.517 15.32 367.773 14.696 367.773 13.944V12.384ZM361.485 8.376V6.48C362.397 5.92 363.597 5.64 365.085 5.64C368.141 5.64 369.669 7.192 369.669 10.296V18H367.797V16.56C367.173 17.6 366.037 18.12 364.389 18.12C363.253 18.12 362.333 17.784 361.629 17.112C360.941 16.44 360.597 15.592 360.597 14.568C360.597 13.4 361.037 12.496 361.917 11.856C362.813 11.2 364.029 10.872 365.565 10.872H367.773V10.248C367.773 9.288 367.557 8.568 367.125 8.088C366.693 7.592 365.965 7.344 364.941 7.344C363.645 7.344 362.493 7.688 361.485 8.376ZM379.657 6.24V8.04C378.921 7.592 377.913 7.368 376.633 7.368C375.993 7.368 375.481 7.52 375.097 7.824C374.729 8.112 374.545 8.488 374.545 8.952C374.545 9.24 374.601 9.496 374.713 9.72C374.825 9.928 375.041 10.136 375.361 10.344C375.697 10.552 375.937 10.696 376.081 10.776C376.241 10.84 376.577 10.984 377.089 11.208C378.113 11.624 378.913 12.096 379.489 12.624C380.065 13.152 380.353 13.864 380.353 14.76C380.353 15.8 379.985 16.624 379.249 17.232C378.529 17.84 377.537 18.144 376.273 18.144C374.801 18.144 373.609 17.896 372.697 17.4V15.552C373.769 16.192 374.921 16.512 376.153 16.512C376.889 16.512 377.449 16.368 377.833 16.08C378.217 15.792 378.409 15.4 378.409 14.904C378.409 14.328 378.193 13.88 377.761 13.56C377.345 13.24 376.641 12.88 375.649 12.48C374.737 12.128 374.001 11.688 373.441 11.16C372.897 10.632 372.625 9.92 372.625 9.024C372.625 8.016 373.001 7.216 373.753 6.624C374.521 6.016 375.473 5.712 376.609 5.712C377.873 5.712 378.889 5.888 379.657 6.24ZM386.284 17.688L381.364 5.832H383.5L385.084 9.84L387.22 15.36C387.348 14.944 387.988 13.104 389.14 9.84L390.556 5.832H392.596L388.204 17.688C387.58 19.336 386.836 20.496 385.972 21.168C385.124 21.84 384.148 22.176 383.044 22.176C382.628 22.176 382.292 22.136 382.036 22.056V20.352C382.276 20.416 382.548 20.448 382.852 20.448C384.468 20.448 385.612 19.528 386.284 17.688Z"
              stroke="#aaaaaa"
              strokeWidth=".5"
              className="path"
            />
          </svg>
        </div>

        <svg width="228" height="132" viewBox="0 0 228 132" fill="none" className="cart"
             xmlns="http://www.w3.org/2000/svg">
          <circle className="cart" cx="116" cy="107" r="22.5"/>
          <circle className="cart" cx="57" cy="107" r="22.5"/>
          <path className="cart" d="M228 2.5H183L172 21.0059M172 21.0059L140.5 74H33L5 21.0059H172Z"/>
        </svg>
      </div>
      {lineBackwards()}
    </div>
  )
}

export default Section
