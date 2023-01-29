import clsx from 'clsx';

function Icon({
  children,
  className,
  fill = 'currentColor',
  stroke,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx('w-5 h-5', className)}
    >
      {children}
    </svg>
  );
}
export function Logo() {
  return (
    <svg
      width="171"
      height="66"
      viewBox="0 0 171 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5705 14.448C15.8705 14.868 15.2405 15.61 14.6805 16.674C14.1485 17.71 13.7005 18.914 13.3365 20.286C12.9725 21.658 12.6925 23.128 12.4965 24.696C12.3285 26.236 12.2445 27.72 12.2445 29.148C12.2445 30.072 12.3005 31.108 12.4125 32.256C12.5245 33.404 12.7485 34.482 13.0845 35.49C13.4485 36.498 13.9525 37.352 14.5965 38.052C15.2405 38.724 16.0945 39.06 17.1585 39.06C18.3065 39.06 19.2725 38.668 20.0565 37.884C20.8405 37.072 21.4705 36.022 21.9465 34.734C22.4505 33.418 22.8145 31.934 23.0385 30.282C23.2625 28.63 23.3745 26.95 23.3745 25.242C23.3745 22.526 23.1225 20.314 22.6185 18.606C22.1425 16.87 21.4985 15.512 20.6865 14.532C19.8745 13.552 18.9225 12.894 17.8305 12.558C16.7665 12.194 15.6325 12.012 14.4285 12.012C13.0285 12.012 11.7125 12.208 10.4805 12.6C9.27645 12.992 8.21245 13.58 7.28845 14.364C6.39245 15.148 5.67845 16.128 5.14645 17.304C4.64245 18.48 4.39045 19.852 4.39045 21.42C4.39045 22.232 4.44645 22.89 4.55845 23.394C4.67045 23.898 4.79645 24.304 4.93645 24.612C5.07645 24.892 5.21645 25.102 5.35645 25.242C5.52445 25.382 5.63645 25.466 5.69245 25.494C4.18045 25.494 2.99045 25.116 2.12245 24.36C1.25445 23.576 0.820453 22.4 0.820453 20.832C0.820453 19.404 1.18445 18.06 1.91245 16.8C2.66845 15.54 3.69045 14.448 4.97845 13.524C6.26645 12.6 7.77845 11.872 9.51445 11.34C11.2505 10.78 13.1125 10.5 15.1005 10.5C17.6765 10.5 19.8185 10.948 21.5265 11.844C23.2345 12.74 24.6065 13.93 25.6425 15.414C26.6785 16.87 27.4065 18.55 27.8265 20.454C28.2465 22.33 28.4565 24.276 28.4565 26.292C28.4565 28.14 28.2745 30.016 27.9105 31.92C27.5745 33.796 26.9725 35.504 26.1045 37.044C25.2365 38.584 24.0885 39.844 22.6605 40.824C21.2325 41.776 19.4405 42.252 17.2845 42.252C15.8845 42.252 14.5685 42.014 13.3365 41.538C12.1045 41.062 11.0265 40.278 10.1025 39.186C9.17845 38.094 8.43645 36.666 7.87645 34.902C7.34445 33.138 7.07845 30.968 7.07845 28.392C7.07845 26.796 7.20445 25.158 7.45645 23.478C7.70845 21.798 8.11445 20.272 8.67445 18.9C9.23445 17.5 9.97645 16.352 10.9005 15.456C11.8525 14.56 13.0285 14.112 14.4285 14.112C14.7365 14.112 15.0725 14.14 15.4365 14.196C15.8005 14.224 16.1785 14.308 16.5705 14.448ZM35.6867 21V24.528C36.0227 24.024 36.3447 23.548 36.6527 23.1C36.9887 22.652 37.3527 22.26 37.7447 21.924C38.1367 21.588 38.5707 21.322 39.0467 21.126C39.5227 20.902 40.0547 20.79 40.6427 20.79C41.5947 20.79 42.2947 21.042 42.7427 21.546C43.1907 22.022 43.4147 22.61 43.4147 23.31C43.4147 23.73 43.3447 24.08 43.2047 24.36C43.0647 24.64 42.8967 24.864 42.7007 25.032C42.5047 25.2 42.2947 25.326 42.0707 25.41C41.8467 25.466 41.6507 25.494 41.4827 25.494C41.2307 25.494 41.0207 25.438 40.8527 25.326C40.7127 25.214 40.5587 25.102 40.3907 24.99C40.2507 24.85 40.0827 24.724 39.8867 24.612C39.6907 24.5 39.4387 24.444 39.1307 24.444C38.4867 24.444 37.8707 24.668 37.2827 25.116C36.6947 25.564 36.1627 26.04 35.6867 26.544V42H31.4867V21H35.6867ZM61.0941 21V41.118C61.7941 40.894 62.4101 40.642 62.9421 40.362C63.5021 40.082 63.9781 39.704 64.3701 39.228C64.7901 38.752 65.1261 38.136 65.3781 37.38C65.6581 36.624 65.8681 35.658 66.0081 34.482H67.5621C67.3381 35.966 67.0441 37.184 66.6801 38.136C66.3441 39.06 65.9101 39.816 65.3781 40.404C64.8741 40.964 64.2581 41.412 63.5301 41.748C62.8301 42.056 62.0181 42.35 61.0941 42.63V45.318C61.0941 46.634 60.9541 47.74 60.6741 48.636C60.3941 49.56 60.0021 50.302 59.4981 50.862C59.0221 51.45 58.4621 51.87 57.8181 52.122C57.2021 52.374 56.5441 52.5 55.8441 52.5C54.4441 52.5 53.3521 52.094 52.5681 51.282C51.7841 50.498 51.3921 49.532 51.3921 48.384C51.3921 47.656 51.5461 46.998 51.8541 46.41C52.1901 45.822 52.6101 45.276 53.1141 44.772C53.6461 44.296 54.2341 43.862 54.8781 43.47C55.5501 43.106 56.2221 42.784 56.8941 42.504V38.892C56.3621 39.62 55.6901 40.222 54.8781 40.698C54.0941 41.174 53.1981 41.412 52.1901 41.412C51.3501 41.412 50.4961 41.258 49.6281 40.95C48.7881 40.614 48.0181 40.082 47.3181 39.354C46.6461 38.626 46.0861 37.674 45.6381 36.498C45.2181 35.322 45.0081 33.894 45.0081 32.214C45.0081 30.954 45.1481 29.652 45.4281 28.308C45.7361 26.964 46.2121 25.746 46.8561 24.654C47.5001 23.534 48.3261 22.61 49.3341 21.882C50.3421 21.154 51.5601 20.79 52.9881 20.79C53.3241 20.79 53.6741 20.832 54.0381 20.916C54.4301 20.972 54.7941 21.084 55.1301 21.252C55.4941 21.42 55.8301 21.658 56.1381 21.966C56.4461 22.246 56.6981 22.596 56.8941 23.016V21H61.0941ZM53.2401 38.22C53.6601 38.22 54.0801 38.108 54.5001 37.884C54.9481 37.66 55.3401 37.352 55.6761 36.96C56.0401 36.568 56.3341 36.106 56.5581 35.574C56.7821 35.042 56.8941 34.468 56.8941 33.852V24.906C56.6981 24.458 56.3901 24.052 55.9701 23.688C55.5781 23.296 55.0601 23.1 54.4161 23.1C53.5201 23.1 52.7501 23.394 52.1061 23.982C51.4621 24.542 50.9441 25.256 50.5521 26.124C50.1601 26.992 49.8661 27.944 49.6701 28.98C49.5021 30.016 49.4181 30.996 49.4181 31.92C49.4181 34.188 49.7401 35.812 50.3841 36.792C51.0561 37.744 52.0081 38.22 53.2401 38.22ZM55.0461 50.316C55.8021 50.316 56.2921 50.022 56.5161 49.434C56.7681 48.874 56.8941 48.104 56.8941 47.124V44.184C55.4941 44.828 54.5001 45.458 53.9121 46.074C53.3241 46.718 53.0301 47.432 53.0301 48.216C53.0301 48.86 53.1981 49.364 53.5341 49.728C53.8981 50.12 54.4021 50.316 55.0461 50.316ZM81.4788 21V35.28C81.4788 35.616 81.4928 36.008 81.5208 36.456C81.5488 36.876 81.6188 37.282 81.7308 37.674C81.8708 38.066 82.0668 38.402 82.3188 38.682C82.5988 38.934 82.9908 39.06 83.4948 39.06C83.7188 39.06 83.9568 39.032 84.2088 38.976C84.4888 38.92 84.7128 38.864 84.8808 38.808C84.9088 38.948 84.9228 39.074 84.9228 39.186C84.9508 39.298 84.9648 39.424 84.9648 39.564C84.9648 40.404 84.6428 41.062 83.9988 41.538C83.3548 42.014 82.6268 42.252 81.8148 42.252C80.9468 42.252 80.1628 41.958 79.4628 41.37C78.7628 40.754 78.2868 39.732 78.0348 38.304C77.6148 39.396 76.9288 40.334 75.9768 41.118C75.0248 41.874 73.8768 42.252 72.5328 42.252C71.6928 42.252 70.8388 42.084 69.9708 41.748C69.1308 41.384 68.3748 40.824 67.7028 40.068C67.0308 39.312 66.4708 38.332 66.0228 37.128C65.6028 35.924 65.3928 34.468 65.3928 32.76C65.3928 31.444 65.5328 30.086 65.8128 28.686C66.1208 27.258 66.5828 25.97 67.1988 24.822C67.8428 23.646 68.6688 22.68 69.6768 21.924C70.6848 21.168 71.8888 20.79 73.2888 20.79C74.0168 20.79 74.7588 20.944 75.5148 21.252C76.2988 21.56 76.8868 22.148 77.2788 23.016V21H81.4788ZM73.4148 39.06C73.9468 39.06 74.4508 38.934 74.9268 38.682C75.4028 38.43 75.8088 38.094 76.1448 37.674C76.5088 37.254 76.7888 36.778 76.9848 36.246C77.1808 35.686 77.2788 35.098 77.2788 34.482V24.906C77.0828 24.43 76.7888 24.01 76.3968 23.646C76.0048 23.282 75.4448 23.1 74.7168 23.1C73.8208 23.1 73.0648 23.408 72.4488 24.024C71.8328 24.612 71.3288 25.368 70.9368 26.292C70.5448 27.216 70.2508 28.252 70.0548 29.4C69.8868 30.52 69.8028 31.598 69.8028 32.634C69.8028 34.902 70.1528 36.54 70.8528 37.548C71.5528 38.556 72.4068 39.06 73.4148 39.06Z"
        fill="#88B13E"
      />
      <path
        d="M105.126 14.868C104.23 14.868 103.306 14.798 102.354 14.658C101.43 14.49 100.492 14.308 99.5398 14.112V23.73H105.756V26.208H99.5398V42H95.0038V13.356C94.8638 13.328 94.7238 13.314 94.5838 13.314C94.4718 13.314 94.3458 13.314 94.2058 13.314C93.4778 13.314 92.7918 13.412 92.1478 13.608C91.5038 13.804 90.9438 14.14 90.4678 14.616C90.0198 15.092 89.6558 15.736 89.3758 16.548C89.1238 17.332 88.9978 18.326 88.9978 19.53C88.9978 21.042 89.1798 22.316 89.5438 23.352C89.9358 24.36 90.3838 25.074 90.8878 25.494C87.5558 25.494 85.8898 23.66 85.8898 19.992C85.8898 18.648 86.1138 17.402 86.5618 16.254C87.0098 15.106 87.7098 14.112 88.6618 13.272C89.6138 12.404 90.8178 11.732 92.2738 11.256C93.7578 10.752 95.5218 10.5 97.5658 10.5C98.2658 10.5 98.9238 10.528 99.5398 10.584C100.184 10.64 100.8 10.696 101.388 10.752C101.976 10.808 102.578 10.864 103.194 10.92C103.81 10.976 104.468 11.004 105.168 11.004C105.868 11.004 106.526 10.976 107.142 10.92C107.758 10.836 108.346 10.696 108.906 10.5C108.85 11.48 108.71 12.264 108.486 12.852C108.29 13.412 108.024 13.846 107.688 14.154C107.352 14.434 106.96 14.63 106.512 14.742C106.092 14.826 105.63 14.868 105.126 14.868ZM112.919 21V24.528C113.255 24.024 113.577 23.548 113.885 23.1C114.221 22.652 114.585 22.26 114.977 21.924C115.369 21.588 115.803 21.322 116.279 21.126C116.755 20.902 117.287 20.79 117.875 20.79C118.827 20.79 119.527 21.042 119.975 21.546C120.423 22.022 120.647 22.61 120.647 23.31C120.647 23.73 120.577 24.08 120.437 24.36C120.297 24.64 120.129 24.864 119.933 25.032C119.737 25.2 119.527 25.326 119.303 25.41C119.079 25.466 118.883 25.494 118.715 25.494C118.463 25.494 118.253 25.438 118.085 25.326C117.945 25.214 117.791 25.102 117.623 24.99C117.483 24.85 117.315 24.724 117.119 24.612C116.923 24.5 116.671 24.444 116.363 24.444C115.719 24.444 115.103 24.668 114.515 25.116C113.927 25.564 113.395 26.04 112.919 26.544V42H108.719V21H112.919ZM135.974 26.25C135.974 28.21 135.162 29.848 133.538 31.164C131.942 32.48 129.716 33.292 126.86 33.6C126.972 34.72 127.168 35.63 127.448 36.33C127.756 37.03 128.12 37.59 128.54 38.01C128.96 38.402 129.436 38.682 129.968 38.85C130.528 38.99 131.102 39.06 131.69 39.06C133.034 39.06 134.294 38.71 135.47 38.01C136.646 37.31 137.598 36.134 138.326 34.482H139.67C139.306 35.518 138.802 36.512 138.158 37.464C137.514 38.388 136.758 39.214 135.89 39.942C135.022 40.642 134.084 41.202 133.076 41.622C132.068 42.042 131.032 42.252 129.968 42.252C128.988 42.252 128.036 42.084 127.112 41.748C126.216 41.412 125.418 40.866 124.718 40.11C124.018 39.326 123.444 38.318 122.996 37.086C122.576 35.854 122.366 34.342 122.366 32.55C122.366 31.374 122.492 30.1 122.744 28.728C123.024 27.356 123.472 26.082 124.088 24.906C124.732 23.73 125.558 22.75 126.566 21.966C127.602 21.182 128.876 20.79 130.388 20.79C131.088 20.79 131.76 20.874 132.404 21.042C133.076 21.182 133.678 21.462 134.21 21.882C134.742 22.274 135.162 22.82 135.47 23.52C135.806 24.22 135.974 25.13 135.974 26.25ZM126.818 31.962C128.806 31.654 130.374 30.954 131.522 29.862C132.698 28.77 133.286 27.426 133.286 25.83C133.286 24.766 133.104 24.01 132.74 23.562C132.376 23.086 131.858 22.848 131.186 22.848C130.458 22.848 129.814 23.128 129.254 23.688C128.722 24.248 128.274 24.976 127.91 25.872C127.546 26.74 127.266 27.72 127.07 28.812C126.902 29.876 126.818 30.926 126.818 31.962ZM154.461 34.482C153.649 35.602 152.809 36.54 151.941 37.296C151.101 38.024 150.275 38.668 149.463 39.228C149.155 39.788 148.763 40.264 148.287 40.656C147.811 41.02 147.293 41.328 146.733 41.58C146.201 41.804 145.655 41.972 145.095 42.084C144.563 42.196 144.073 42.252 143.625 42.252C142.393 42.252 141.371 42.056 140.559 41.664C139.775 41.272 139.145 40.782 138.669 40.194C138.193 39.578 137.857 38.906 137.661 38.178C137.465 37.422 137.367 36.708 137.367 36.036C137.367 35.308 137.507 34.678 137.787 34.146C138.095 33.586 138.459 33.194 138.879 32.97C139.607 30.87 140.321 28.798 141.021 26.754C141.721 24.682 142.183 22.61 142.407 20.538L146.649 19.698C147.321 22.358 147.867 24.528 148.287 26.208C148.735 27.888 149.085 29.316 149.337 30.492C149.617 31.64 149.813 32.662 149.925 33.558C150.065 34.426 150.135 35.392 150.135 36.456C150.611 36.148 151.059 35.826 151.479 35.49C151.899 35.126 152.305 34.79 152.697 34.482H154.461ZM145.683 36.162C145.683 35.294 145.627 34.524 145.515 33.852C145.431 33.18 145.291 32.438 145.095 31.626C144.899 30.814 144.647 29.834 144.339 28.686C144.059 27.51 143.723 26.012 143.331 24.192C143.163 25.76 142.813 27.258 142.281 28.686C141.777 30.114 141.315 31.584 140.895 33.096C141.147 33.264 141.357 33.502 141.525 33.81C141.721 34.09 141.819 34.468 141.819 34.944C141.819 35.476 141.679 35.882 141.399 36.162C141.119 36.442 140.811 36.582 140.475 36.582C140.027 36.582 139.649 36.386 139.341 35.994C139.565 36.974 139.957 37.744 140.517 38.304C141.077 38.836 141.819 39.102 142.743 39.102C143.639 39.102 144.353 38.878 144.885 38.43C145.417 37.954 145.683 37.198 145.683 36.162ZM156.847 12.6V24.192C157.267 23.436 157.687 22.834 158.107 22.386C158.555 21.91 159.003 21.56 159.451 21.336C159.899 21.112 160.319 20.972 160.711 20.916C161.131 20.832 161.523 20.79 161.887 20.79C163.147 20.79 164.155 21.028 164.911 21.504C165.695 21.98 166.283 22.596 166.675 23.352C167.067 24.08 167.319 24.892 167.431 25.788C167.571 26.684 167.641 27.552 167.641 28.392C167.641 29.316 167.599 30.436 167.515 31.752C167.459 33.068 167.431 34.342 167.431 35.574C167.431 35.854 167.445 36.19 167.473 36.582C167.501 36.974 167.585 37.352 167.725 37.716C167.865 38.08 168.075 38.402 168.355 38.682C168.635 38.934 169.041 39.06 169.573 39.06C169.769 39.06 170.007 39.046 170.287 39.018C170.567 38.962 170.777 38.864 170.917 38.724V39.018C170.917 39.774 170.819 40.362 170.623 40.782C170.427 41.202 170.189 41.524 169.909 41.748C169.629 41.972 169.321 42.112 168.985 42.168C168.649 42.224 168.355 42.252 168.103 42.252C167.235 42.252 166.493 42.084 165.877 41.748C165.261 41.384 164.743 40.908 164.323 40.32C163.931 39.732 163.637 39.06 163.441 38.304C163.273 37.52 163.189 36.694 163.189 35.826C163.189 35.574 163.189 35.112 163.189 34.44C163.217 33.74 163.231 32.998 163.231 32.214C163.259 31.43 163.273 30.688 163.273 29.988C163.301 29.288 163.315 28.798 163.315 28.518C163.315 27.622 163.245 26.88 163.105 26.292C162.965 25.704 162.769 25.242 162.517 24.906C162.265 24.57 161.971 24.332 161.635 24.192C161.327 24.052 160.991 23.982 160.627 23.982C159.759 23.982 159.003 24.332 158.359 25.032C157.743 25.732 157.239 26.908 156.847 28.56V42H152.647V13.188L156.847 12.6Z"
        fill="#F96030"
      />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Menu</title>
      <line x1="3" y1="6.375" x2="17" y2="6.375" strokeWidth="1.25" />
      <line x1="3" y1="10.375" x2="17" y2="10.375" strokeWidth="1.25" />
      <line x1="3" y1="14.375" x2="17" y2="14.375" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconClose(props) {
  return (
    <Icon {...props} stroke={props.stroke || 'currentColor'}>
      <title>Close</title>
      <line
        x1="4.44194"
        y1="4.30806"
        x2="15.7556"
        y2="15.6218"
        strokeWidth="1.25"
      />
      <line
        y1="-0.625"
        x2="16"
        y2="-0.625"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
        strokeWidth="1.25"
      />
    </Icon>
  );
}

export function IconArrow({ direction = 'right' }) {
  let rotate;

  switch (direction) {
    case 'right':
      rotate = 'rotate-0';
      break;
    case 'left':
      rotate = 'rotate-180';
      break;
    case 'up':
      rotate = '-rotate-90';
      break;
    case 'down':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon className={`w-5 h-5 ${rotate}`}>
      <title>Arrow</title>
      <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconCaret({
  direction = 'down',
  stroke = 'currentColor',
  ...props
}) {
  let rotate;

  switch (direction) {
    case 'down':
      rotate = 'rotate-0';
      break;
    case 'up':
      rotate = 'rotate-180';
      break;
    case 'left':
      rotate = '-rotate-90';
      break;
    case 'right':
      rotate = 'rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <Icon
      {...props}
      className={`w-5 h-5 transition ${rotate}`}
      fill="transparent"
      stroke={stroke}
    >
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconSelect(props) {
  return (
    <Icon {...props}>
      <title>Select</title>
      <path d="M7 8.5L10 6.5L13 8.5" strokeWidth="1.25" />
      <path d="M13 11.5L10 13.5L7 11.5" strokeWidth="1.25" />
    </Icon>
  );
}

export function IconBag(props) {
  return (
    <Icon {...props}>
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </Icon>
  );
}

export function IconAccount(props) {
  return (
    <Icon {...props}>
      <title>Account</title>
      <path
        fillRule="evenodd"
        d="M9.9998 12.625c-1.9141 0-3.6628.698-5.0435 1.8611C3.895 13.2935 3.25 11.7221 3.25 10c0-3.728 3.022-6.75 6.75-6.75 3.7279 0 6.75 3.022 6.75 6.75 0 1.7222-.645 3.2937-1.7065 4.4863-1.3807-1.1632-3.1295-1.8613-5.0437-1.8613ZM10 18c-2.3556 0-4.4734-1.0181-5.9374-2.6382C2.7806 13.9431 2 12.0627 2 10c0-4.4183 3.5817-8 8-8s8 3.5817 8 8-3.5817 8-8 8Zm0-12.5c-1.567 0-2.75 1.394-2.75 3s1.183 3 2.75 3 2.75-1.394 2.75-3-1.183-3-2.75-3Z"
      />
    </Icon>
  );
}

export function IconHelp(props) {
  return (
    <Icon {...props}>
      <title>Help</title>
      <path d="M3.375 10a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM10 2.125a7.875 7.875 0 1 0 0 15.75 7.875 7.875 0 0 0 0-15.75Zm.699 10.507H9.236V14h1.463v-1.368ZM7.675 7.576A3.256 3.256 0 0 0 7.5 8.67h1.245c0-.496.105-.89.316-1.182.218-.299.553-.448 1.005-.448a1 1 0 0 1 .327.065c.124.044.24.113.35.208.108.095.2.223.272.383.08.154.12.34.12.558a1.3 1.3 0 0 1-.076.471c-.044.131-.11.252-.197.361-.08.102-.174.197-.283.285-.102.087-.212.182-.328.284a3.157 3.157 0 0 0-.382.383c-.102.124-.19.27-.262.438a2.476 2.476 0 0 0-.164.591 6.333 6.333 0 0 0-.043.81h1.179c0-.263.021-.485.065-.668a1.65 1.65 0 0 1 .207-.47c.088-.139.19-.263.306-.372.117-.11.244-.223.382-.34l.35-.306c.116-.11.218-.23.305-.361.095-.139.168-.3.219-.482.058-.19.087-.412.087-.667 0-.35-.062-.664-.186-.942a1.881 1.881 0 0 0-.513-.689 2.07 2.07 0 0 0-.753-.427A2.721 2.721 0 0 0 10.12 6c-.4 0-.764.066-1.092.197a2.36 2.36 0 0 0-.83.536c-.225.234-.4.515-.523.843Z" />
    </Icon>
  );
}

export function IconSearch(props) {
  return (
    <Icon {...props}>
      <title>Search</title>
      <path
        fillRule="evenodd"
        d="M13.3 8.52a4.77 4.77 0 1 1-9.55 0 4.77 4.77 0 0 1 9.55 0Zm-.98 4.68a6.02 6.02 0 1 1 .88-.88l4.3 4.3-.89.88-4.3-4.3Z"
      />
    </Icon>
  );
}

export function IconCheck({ stroke = 'currentColor', ...props }) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Check</title>
      <circle cx="10" cy="10" r="7.25" strokeWidth="1.25" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.04 10.37 2.42 2.41 3.5-5.56"
      />
    </Icon>
  );
}

export function IconRemove(props) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Remove</title>
      <path
        d="M4 6H16"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.5 6L6 17H14L14.5 6"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6"
        strokeWidth="1.25"
      />
    </Icon>
  );
}
