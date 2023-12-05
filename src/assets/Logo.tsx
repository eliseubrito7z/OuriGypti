import * as React from "react"
import Svg, { SvgProps, Mask, Path } from "react-native-svg"
const Logo = (props: SvgProps) => (
    <Svg
        width={197}
        height={38}
        fill="none"
        {...props}
    >
        <Mask
            id="a"
            width={197}
            height={39}
            x={0}
            y={0}
            fill="#000"
            maskUnits="userSpaceOnUse"
        >
            <Path fill="#fff" d="M0 0h197v39H0z" />
            <Path d="M18.04 9.18v12.129c0 2.395-.86 4.446-2.58 6.152C13.743 29.154 11.666 30 9.23 30c-2.447 0-4.524-.846-6.23-2.54C1.281 25.756.422 23.705.422 21.31V9.179c0-2.395.86-4.44 2.578-6.132C4.719 1.34 6.796.488 9.23.488c2.435 0 4.512.853 6.23 2.559 1.72 1.693 2.58 3.737 2.58 6.133ZM3.546 9.12v12.246c0 1.55.553 2.878 1.66 3.985 1.107 1.106 2.448 1.66 4.023 1.66 1.55 0 2.885-.554 4.004-1.66 1.107-1.094 1.667-2.422 1.68-3.985V9.121c-.013-1.562-.573-2.89-1.68-3.984-1.12-1.107-2.454-1.66-4.004-1.66-1.575 0-2.916.553-4.023 1.66C4.1 6.23 3.547 7.559 3.547 9.12Zm28.281 17.715c1.094 0 2.05-.41 2.871-1.23.82-.82 1.23-1.804 1.23-2.95V9.492l3.126-1.367v14.531c0 2.032-.716 3.763-2.149 5.196C35.474 29.284 33.742 30 31.711 30s-3.77-.716-5.215-2.148c-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.834.82 1.875 1.23 3.125 1.23ZM46.79 30V15.469c0-2.031.716-3.763 2.148-5.196 1.433-1.432 3.165-2.148 5.196-2.148 2.07 0 3.808.716 5.215 2.148 1.445 1.485 2.168 3.217 2.168 5.196v.078l-3.125 1.367v-1.387c-.026-1.21-.443-2.213-1.25-3.007-.834-.82-1.817-1.23-2.95-1.23-1.184 0-2.194.41-3.027 1.23-.833.82-1.25 1.803-1.25 2.949v13.164L46.79 30Zm34.063-7.54 3.125-1.366v1.562c0 2.032-.717 3.763-2.149 5.196C80.396 29.284 78.664 30 76.633 30s-3.77-.716-5.215-2.148c-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.094 0 2.05-.443 2.871-1.328.82-.886 1.23-1.901 1.23-3.047ZM68.977 4.903a2.536 2.536 0 0 1-.743-1.836c0-.716.248-1.321.743-1.816a2.416 2.416 0 0 1 1.796-.762c.704 0 1.303.254 1.797.762.495.495.743 1.1.743 1.816 0 .717-.248 1.329-.743 1.836a2.447 2.447 0 0 1-1.797.743 2.447 2.447 0 0 1-1.796-.743Zm38.906 8.79v7.617c0 2.395-.86 4.446-2.578 6.152-1.719 1.693-3.796 2.539-6.23 2.539-2.449 0-4.526-.846-6.231-2.54-1.719-1.705-2.578-3.756-2.578-6.151V9.179c0-2.395.859-4.44 2.578-6.132C94.563 1.34 96.639.488 99.074.488c2.461 0 4.538.853 6.231 2.559 1.718 1.719 2.578 3.763 2.578 6.133v.175l-3.125 1.426v-1.66c0-1.55-.56-2.878-1.68-3.984-1.12-1.107-2.454-1.66-4.004-1.66-1.575 0-2.916.553-4.023 1.66-1.107 1.093-1.66 2.422-1.66 3.984v12.246c0 1.55.553 2.878 1.66 3.985 1.107 1.106 2.448 1.66 4.023 1.66 1.498 0 2.832-.554 4.004-1.66 1.12-1.068 1.68-2.396 1.68-3.985v-4.55h-5.801l1.367-3.126h7.559Zm17.89 16.718v-1.719c-1.224.873-2.63 1.309-4.218 1.309-2.032 0-3.77-.716-5.215-2.148-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.094 0 2.051-.41 2.871-1.23.807-.808 1.217-1.771 1.23-2.891V9.492l3.125-1.367v22.344c0 2.031-.722 3.763-2.168 5.195-1.445 1.432-3.183 2.148-5.214 2.148-2.032 0-3.763-.716-5.196-2.148-.911-.911-1.53-1.94-1.855-3.086l3.105-.664c.209.56.554 1.061 1.035 1.504.899.82 1.908 1.23 3.028 1.23 1.094 0 2.057-.41 2.89-1.23.808-.794 1.224-1.797 1.25-3.008Zm13.985-7.812c0 1.198.436 2.2 1.308 3.008.886.82 1.895 1.23 3.028 1.23 1.094 0 2.057-.41 2.89-1.23.808-.795 1.224-1.797 1.25-3.008v-7.07c-.026-1.212-.442-2.214-1.25-3.008-.833-.82-1.875-1.23-3.125-1.23-1.093 0-2.05.41-2.871 1.23-.807.807-1.217 1.77-1.23 2.89v7.187Zm-3.125 15.039V15.469c0-2.031.722-3.763 2.168-5.196 1.445-1.432 3.183-2.148 5.215-2.148 2.031 0 3.763.716 5.195 2.148 1.432 1.433 2.148 3.165 2.148 5.196v7.187c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-1.602 0-3.021-.443-4.258-1.328v7.598l-3.125 1.367Zm34.062-15.176 3.125-1.367v1.562c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-2.032 0-3.77-.716-5.215-2.148-1.446-1.433-2.168-3.165-2.168-5.196V11.641h-2.422l1.367-3.125h1.055v-6.66l3.125-1.368v8.028h9.922l-1.368 3.125h-8.554v10.957c.026 1.224.442 2.226 1.25 3.008.846.82 1.836 1.23 2.969 1.23 1.158 0 2.161-.417 3.007-1.25.834-.807 1.25-1.849 1.25-3.125Zm22.461 0 3.125-1.367v1.562c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-2.032 0-3.77-.716-5.215-2.148-1.446-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.442 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.093 0 2.05-.443 2.871-1.328.82-.886 1.23-1.901 1.23-3.047ZM181.281 4.902a2.535 2.535 0 0 1-.742-1.836c0-.716.247-1.321.742-1.816a2.417 2.417 0 0 1 1.797-.762c.703 0 1.302.254 1.797.762.495.495.742 1.1.742 1.816 0 .717-.247 1.329-.742 1.836a2.448 2.448 0 0 1-1.797.743 2.448 2.448 0 0 1-1.797-.743Z" />
        </Mask>
        <Path
            fill="#000"
            d="M18.04 9.18v12.129c0 2.395-.86 4.446-2.58 6.152C13.743 29.154 11.666 30 9.23 30c-2.447 0-4.524-.846-6.23-2.54C1.281 25.756.422 23.705.422 21.31V9.179c0-2.395.86-4.44 2.578-6.132C4.719 1.34 6.796.488 9.23.488c2.435 0 4.512.853 6.23 2.559 1.72 1.693 2.58 3.737 2.58 6.133ZM3.546 9.12v12.246c0 1.55.553 2.878 1.66 3.985 1.107 1.106 2.448 1.66 4.023 1.66 1.55 0 2.885-.554 4.004-1.66 1.107-1.094 1.667-2.422 1.68-3.985V9.121c-.013-1.562-.573-2.89-1.68-3.984-1.12-1.107-2.454-1.66-4.004-1.66-1.575 0-2.916.553-4.023 1.66C4.1 6.23 3.547 7.559 3.547 9.12Zm28.281 17.715c1.094 0 2.05-.41 2.871-1.23.82-.82 1.23-1.804 1.23-2.95V9.492l3.126-1.367v14.531c0 2.032-.716 3.763-2.149 5.196C35.474 29.284 33.742 30 31.711 30s-3.77-.716-5.215-2.148c-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.834.82 1.875 1.23 3.125 1.23ZM46.79 30V15.469c0-2.031.716-3.763 2.148-5.196 1.433-1.432 3.165-2.148 5.196-2.148 2.07 0 3.808.716 5.215 2.148 1.445 1.485 2.168 3.217 2.168 5.196v.078l-3.125 1.367v-1.387c-.026-1.21-.443-2.213-1.25-3.007-.834-.82-1.817-1.23-2.95-1.23-1.184 0-2.194.41-3.027 1.23-.833.82-1.25 1.803-1.25 2.949v13.164L46.79 30Zm34.063-7.54 3.125-1.366v1.562c0 2.032-.717 3.763-2.149 5.196C80.396 29.284 78.664 30 76.633 30s-3.77-.716-5.215-2.148c-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.094 0 2.05-.443 2.871-1.328.82-.886 1.23-1.901 1.23-3.047ZM68.977 4.903a2.536 2.536 0 0 1-.743-1.836c0-.716.248-1.321.743-1.816a2.416 2.416 0 0 1 1.796-.762c.704 0 1.303.254 1.797.762.495.495.743 1.1.743 1.816 0 .717-.248 1.329-.743 1.836a2.447 2.447 0 0 1-1.797.743 2.447 2.447 0 0 1-1.796-.743Zm38.906 8.79v7.617c0 2.395-.86 4.446-2.578 6.152-1.719 1.693-3.796 2.539-6.23 2.539-2.449 0-4.526-.846-6.231-2.54-1.719-1.705-2.578-3.756-2.578-6.151V9.179c0-2.395.859-4.44 2.578-6.132C94.563 1.34 96.639.488 99.074.488c2.461 0 4.538.853 6.231 2.559 1.718 1.719 2.578 3.763 2.578 6.133v.175l-3.125 1.426v-1.66c0-1.55-.56-2.878-1.68-3.984-1.12-1.107-2.454-1.66-4.004-1.66-1.575 0-2.916.553-4.023 1.66-1.107 1.093-1.66 2.422-1.66 3.984v12.246c0 1.55.553 2.878 1.66 3.985 1.107 1.106 2.448 1.66 4.023 1.66 1.498 0 2.832-.554 4.004-1.66 1.12-1.068 1.68-2.396 1.68-3.985v-4.55h-5.801l1.367-3.126h7.559Zm17.89 16.718v-1.719c-1.224.873-2.63 1.309-4.218 1.309-2.032 0-3.77-.716-5.215-2.148-1.445-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.443 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.094 0 2.051-.41 2.871-1.23.807-.808 1.217-1.771 1.23-2.891V9.492l3.125-1.367v22.344c0 2.031-.722 3.763-2.168 5.195-1.445 1.432-3.183 2.148-5.214 2.148-2.032 0-3.763-.716-5.196-2.148-.911-.911-1.53-1.94-1.855-3.086l3.105-.664c.209.56.554 1.061 1.035 1.504.899.82 1.908 1.23 3.028 1.23 1.094 0 2.057-.41 2.89-1.23.808-.794 1.224-1.797 1.25-3.008Zm13.985-7.812c0 1.198.436 2.2 1.308 3.008.886.82 1.895 1.23 3.028 1.23 1.094 0 2.057-.41 2.89-1.23.808-.795 1.224-1.797 1.25-3.008v-7.07c-.026-1.212-.442-2.214-1.25-3.008-.833-.82-1.875-1.23-3.125-1.23-1.093 0-2.05.41-2.871 1.23-.807.807-1.217 1.77-1.23 2.89v7.187Zm-3.125 15.039V15.469c0-2.031.722-3.763 2.168-5.196 1.445-1.432 3.183-2.148 5.215-2.148 2.031 0 3.763.716 5.195 2.148 1.432 1.433 2.148 3.165 2.148 5.196v7.187c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-1.602 0-3.021-.443-4.258-1.328v7.598l-3.125 1.367Zm34.062-15.176 3.125-1.367v1.562c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-2.032 0-3.77-.716-5.215-2.148-1.446-1.433-2.168-3.165-2.168-5.196V11.641h-2.422l1.367-3.125h1.055v-6.66l3.125-1.368v8.028h9.922l-1.368 3.125h-8.554v10.957c.026 1.224.442 2.226 1.25 3.008.846.82 1.836 1.23 2.969 1.23 1.158 0 2.161-.417 3.007-1.25.834-.807 1.25-1.849 1.25-3.125Zm22.461 0 3.125-1.367v1.562c0 2.032-.716 3.763-2.148 5.196-1.432 1.432-3.164 2.148-5.195 2.148-2.032 0-3.77-.716-5.215-2.148-1.446-1.433-2.168-3.165-2.168-5.196V9.492l3.125-1.367v14.473c.026 1.21.442 2.213 1.25 3.008.833.82 1.875 1.23 3.125 1.23 1.093 0 2.05-.443 2.871-1.328.82-.886 1.23-1.901 1.23-3.047ZM181.281 4.902a2.535 2.535 0 0 1-.742-1.836c0-.716.247-1.321.742-1.816a2.417 2.417 0 0 1 1.797-.762c.703 0 1.302.254 1.797.762.495.495.742 1.1.742 1.816 0 .717-.247 1.329-.742 1.836a2.448 2.448 0 0 1-1.797.743 2.448 2.448 0 0 1-1.797-.743Z"
        />
        <Path
            fill="#000"
            d="m15.46 27.46.211.215.001-.001-.211-.213ZM3 27.46l-.211.214L3 27.46ZM3 3.048l.21.214.001-.001L3 3.047Zm12.46 0-.21.213.21-.213ZM5.208 25.352l-.212.212.212-.212Zm8.027 0-.21-.214.21.214Zm1.68-3.985.3.003v-.003h-.3Zm0-12.246h.3V9.12l-.3.002Zm-1.68-3.984-.21.213.21-.213Zm-8.027 0 .21.213.002-.001-.212-.212ZM18.039 9.18h-.3V21.31h.6V9.18h-.3Zm-.3 12.129c0 2.314-.827 4.289-2.49 5.939l.423.426c1.775-1.761 2.667-3.889 2.667-6.365h-.6Zm-2.489 5.938c-1.662 1.637-3.663 2.453-6.02 2.453v.6c2.513 0 4.666-.877 6.441-2.625l-.42-.428ZM9.23 29.7c-2.37 0-4.37-.816-6.019-2.452l-.422.426C4.552 29.424 6.705 30.3 9.23 30.3v-.6Zm-6.019-2.452c-1.662-1.65-2.49-3.625-2.49-5.94h-.6c0 2.477.893 4.605 2.668 6.366l.422-.426Zm-2.49-5.94V9.18h-.6v12.129h.6Zm0-12.128c0-2.315.828-4.283 2.49-5.92l-.422-.427C1.014 4.582.122 6.703.122 9.18h.6Zm2.49-5.92C4.874 1.61 6.874.788 9.231.788v-.6c-2.514 0-4.667.884-6.442 2.646l.422.426ZM9.231.788c2.356 0 4.356.822 6.019 2.472l.422-.426C13.897 1.072 11.744.188 9.23.188v.6Zm6.02 2.473c1.661 1.636 2.488 3.604 2.488 5.919h.6c0-2.477-.892-4.598-2.668-6.347l-.42.428ZM3.246 9.12v12.246h.6V9.121h-.6Zm0 12.246c0 1.63.586 3.034 1.748 4.197l.424-.425c-1.051-1.05-1.572-2.303-1.572-3.772h-.6Zm1.748 4.197c1.163 1.163 2.581 1.748 4.235 1.748v-.6c-1.496 0-2.76-.523-3.81-1.573l-.425.425Zm4.235 1.748c1.63 0 3.04-.586 4.215-1.747l-.421-.427c-1.065 1.052-2.324 1.574-3.794 1.574v.6Zm4.215-1.747c1.164-1.15 1.755-2.554 1.77-4.195l-.6-.005c-.013 1.483-.541 2.735-1.591 3.773l.421.427Zm1.77-4.198V9.121h-.6v12.246h.6Zm0-12.248c-.015-1.642-.606-3.046-1.77-4.196l-.421.427c1.05 1.038 1.578 2.29 1.59 3.774l.6-.005Zm-1.77-4.196C12.27 3.763 10.86 3.177 9.23 3.177v.6c1.47 0 2.729.52 3.793 1.573l.422-.427ZM9.23 3.177c-1.654 0-3.072.584-4.235 1.748l.424.424c1.05-1.05 2.315-1.572 3.811-1.572v-.6ZM4.996 4.923c-1.164 1.15-1.75 2.556-1.75 4.198h.6c0-1.483.522-2.734 1.572-3.77l-.422-.428Zm30.934 4.57-.12-.276-.18.079v.196h.3Zm3.125-1.368h.3v-.459l-.42.184.12.275ZM24.328 9.492l-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275Zm0 14.473h-.3v.006l.3-.006Zm1.25 3.008.21-.214-.21.213Zm3.125 1.53c1.179 0 2.21-.446 3.083-1.318l-.424-.425c-.768.768-1.65 1.143-2.659 1.143v.6Zm3.083-1.318c.876-.876 1.319-1.935 1.319-3.162h-.6c0 1.065-.378 1.973-1.143 2.737l.424.425Zm1.319-3.162V22.597h-.6V22.657h.6Zm0-.058V9.492h-.6v13.106h.6Zm-.3-13.106.12.275h.002v-.001h.001l.002-.001.002-.001.005-.002.037-.016c.02-.01.093-.041.146-.064l.244-.107.005-.002a.17.17 0 0 1 .005-.002l.004-.002.005-.002a.22.22 0 0 1 .005-.002l.004-.002.01-.005.019-.008a.239.239 0 0 0 .005-.002l.005-.002.005-.002.005-.003.005-.002.005-.002.005-.002.005-.002.02-.01.02-.008.022-.01.044-.019.045-.02.023-.01.023-.01.012-.005.006-.003.006-.002a5.336 5.336 0 0 1 .125-.055l.052-.023.027-.012.028-.012.007-.003.007-.003a2.485 2.485 0 0 1 .041-.018l.058-.025.119-.052.015-.007a1.612 1.612 0 0 0 .046-.02l.032-.014.016-.007.008-.003a.516.516 0 0 1 .008-.004l.065-.028.066-.03.034-.014.017-.007.008-.004.009-.004.034-.015.035-.015.144-.063.074-.032.01-.004.008-.005c.003 0 .017-.007.02-.008l.037-.016.077-.034.079-.035.162-.07.083-.037.042-.018.021-.01c.004 0 .018-.007.022-.009l.01-.004.01-.005.012-.005a1.13 1.13 0 0 1 .01-.004l.044-.02c.03-.012.057-.025.087-.038l.09-.039.045-.02.046-.02.092-.04.094-.041.012-.005.011-.005.024-.01.048-.022.024-.01.012-.006.012-.005.012-.005.013-.005.024-.011-.24-.55a1.474 1.474 0 0 1-.013.005l-.012.006-.024.01-.049.022-.023.01-.012.005-.012.005-.012.006a1.404 1.404 0 0 0-.036.015l-.047.02-.023.011-.012.005a5.918 5.918 0 0 1-.012.005l-.011.005-.012.005-.023.01-.046.02-.023.01a2.815 2.815 0 0 1-.011.006l-.012.005-.01.005-.012.005-.023.01-.045.019-.022.01-.011.005-.011.004-.022.01-.022.01-.044.019-.086.038-.042.018-.022.01-.01.004a4.782 4.782 0 0 1-.021.01c-.004 0-.007.002-.01.004l-.021.009-.042.018-.081.036-.01.004-.01.005-.02.008-.04.018a3.162 3.162 0 0 1-.05.021l-.01.005-.02.008-.038.017-.02.009-.009.004-.01.004-.075.033-.018.008-.01.004a.836.836 0 0 0-.009.004l-.01.004-.008.004-.019.008-.537.235-.232.102-.107.046-.05.023-.013.005a.38.38 0 0 1-.007.003l-.006.003-.012.005-.012.006c-.003 0-.01.004-.013.005a6.26 6.26 0 0 1-.012.005c-.003.002-.02.01-.023.01l-.047.02-.088.04a102.336 102.336 0 0 0-.122.053l-.019.008-.009.004-.01.004-.07.03a2.994 2.994 0 0 1-.008.004l-.004.002-.004.002-.004.002-.004.002-.004.001-.004.002-.031.014a15.528 15.528 0 0 1-.02.008l-.003.002-.003.001-.004.002-.028.012a4.924 4.924 0 0 1-.024.01l-.003.002-.003.001-.004.002-.003.001-.003.001-.006.003-.003.002h-.003l-.006.004h-.003l-.003.002-.012.005-.022.01-.003.001-.002.001-.003.001-.002.002a1.606 1.606 0 0 0-.03.012l-.033.015-.028.012-.011.005a.777.777 0 0 1-.01.004l-.005.002-.004.002-.006.003a.057.057 0 0 1-.005.002l-.005.002-.002.001.12.275Zm2.825-1.367v14.531h.6V8.125h-.6Zm0 14.531c0 1.952-.685 3.608-2.06 4.983l.423.425c1.49-1.489 2.237-3.297 2.237-5.408h-.6Zm-2.06 4.983c-1.377 1.376-3.032 2.061-4.984 2.061v.6c2.11 0 3.919-.748 5.407-2.236l-.424-.425ZM31.71 29.7c-1.952 0-3.614-.685-5.004-2.061l-.422.426C27.786 29.552 29.6 30.3 31.71 30.3v-.6Zm-5.004-2.061c-1.388-1.377-2.079-3.032-2.079-4.983h-.6c0 2.112.755 3.92 2.257 5.409l.422-.427Zm-2.079-4.983V9.492h-.6v13.164h.6Zm-.18-12.889L27.573 8.4l-.24-.55-3.125 1.367.24.55Zm2.705-1.642v14.473h.6V8.125h-.6Zm0 14.48c.028 1.282.473 2.361 1.34 3.214l.42-.427c-.747-.736-1.136-1.662-1.16-2.8l-.6.012Zm1.34 3.214c.893.88 2.012 1.317 3.335 1.317v-.6c-1.177 0-2.141-.383-2.914-1.144l-.421.427ZM46.789 30h-.3v.459l.42-.184-.12-.275Zm2.148-19.727-.212-.212.212.212Zm10.41 0 .216-.209h-.001l-.214.21Zm2.169 5.274.12.275.18-.079v-.196h-.3Zm-3.125 1.367h-.3v.459l.42-.184-.12-.275Zm0-1.387h.3v-.006l-.3.006Zm-1.25-3.007-.21.213.21-.213Zm-7.227 16.113.12.275.18-.079v-.196h-.3ZM47.09 30V15.469h-.6V30h.6Zm0-14.531c0-1.952.685-3.608 2.06-4.983l-.424-.425c-1.488 1.489-2.236 3.297-2.236 5.408h.6Zm2.06-4.983c1.377-1.376 3.032-2.061 4.984-2.061v-.6c-2.11 0-3.919.748-5.408 2.236l.425.425Zm4.984-2.061c1.992 0 3.653.686 5 2.059l.429-.42c-1.465-1.492-3.281-2.239-5.43-2.239v.6Zm5 2.058c1.393 1.431 2.083 3.089 2.083 4.986h.6c0-2.062-.756-3.867-2.253-5.405l-.43.419Zm2.083 4.986v.078h.6v-.078h-.6Zm.18-.197-3.126 1.367.24.55 3.126-1.367-.24-.55Zm-2.705 1.642v-1.387h-.6v1.387h.6Zm0-1.393c-.028-1.283-.473-2.362-1.34-3.215l-.42.427c.747.736 1.135 1.662 1.16 2.8l.6-.012Zm-1.34-3.215c-.887-.874-1.945-1.317-3.16-1.317v.6c1.052 0 1.96.377 2.74 1.144l.42-.427Zm-3.16-1.317c-1.262 0-2.347.44-3.237 1.317l.42.427c.777-.764 1.71-1.144 2.817-1.144v-.6Zm-3.237 1.317c-.89.875-1.34 1.935-1.34 3.163h.6c0-1.064.383-1.97 1.16-2.736l-.42-.427Zm-1.34 3.163V15.528h.6V15.468h-.6Zm0 .058v13.106h.6V15.527h-.6Zm.18 12.831-3.125 1.367.24.55 3.125-1.367-.24-.55Zm31.058-5.897-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275ZM69.25 9.492l-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275Zm0 14.473h-.3v.006l.3-.006Zm1.25 3.008.21-.214-.21.213Zm5.996-.098-.22-.204.22.204ZM68.977 4.902l-.215.21.002.002.213-.212Zm0-3.652.212.212.002-.003-.214-.209Zm3.593 0-.215.21.003.002.212-.212Zm0 3.652.213.212.002-.002-.215-.21Zm8.402 17.834 3.125-1.367-.24-.55-3.126 1.367.24.55Zm2.705-1.642v1.562h.6v-1.562h-.6Zm0 1.562c0 1.952-.685 3.608-2.061 4.983l.424.425c1.489-1.489 2.237-3.297 2.237-5.408h-.6Zm-2.061 4.983c-1.376 1.376-3.031 2.061-4.983 2.061v.6c2.11 0 3.919-.748 5.407-2.236l-.424-.425ZM76.633 29.7c-1.952 0-3.615-.685-5.004-2.061l-.422.426c1.501 1.487 3.315 2.235 5.426 2.235v-.6Zm-5.004-2.061c-1.388-1.377-2.079-3.032-2.079-4.983h-.6c0 2.112.755 3.92 2.257 5.409l.422-.427Zm-2.079-4.983V9.492h-.6v13.164h.6Zm-.18-12.889L72.495 8.4l-.24-.55-3.125 1.367.24.55Zm2.705-1.642v14.473h.6V8.125h-.6Zm0 14.48c.028 1.282.472 2.361 1.34 3.214l.42-.427c-.747-.736-1.136-1.662-1.16-2.8l-.6.012Zm1.34 3.214c.893.88 2.012 1.317 3.335 1.317v-.6c-1.177 0-2.141-.383-2.915-1.144l-.42.427Zm3.335 1.317c1.186 0 2.22-.485 3.091-1.424l-.44-.408c-.77.831-1.65 1.232-2.651 1.232v.6Zm3.091-1.424c.869-.938 1.31-2.025 1.31-3.251h-.6c0 1.066-.378 2.01-1.15 2.843l.44.408ZM69.191 4.693a2.236 2.236 0 0 1-.657-1.627h-.6c0 .794.278 1.481.828 2.046l.43-.419Zm-.657-1.627c0-.638.218-1.167.655-1.604l-.425-.424c-.552.552-.83 1.235-.83 2.028h.6Zm.657-1.607c.44-.45.961-.67 1.582-.67v-.6c-.784 0-1.46.286-2.011.852l.43.418Zm1.582-.67c.622 0 1.144.22 1.582.67l.43-.418a2.716 2.716 0 0 0-2.012-.853v.6Zm1.585.673c.437.437.654.966.654 1.604h.6c0-.793-.277-1.476-.83-2.028l-.424.424Zm.654 1.604c0 .64-.217 1.176-.657 1.627l.43.419c.55-.565.828-1.252.828-2.046h-.6Zm-.654 1.624c-.438.438-.96.655-1.585.655v.6c.783 0 1.458-.28 2.01-.83l-.425-.425Zm-1.585.655a2.148 2.148 0 0 1-1.584-.655l-.425.424c.552.552 1.227.83 2.01.83v-.6Zm37.11 8.346h.3v-.3h-.3v.3Zm-2.578 13.77.21.214.001-.001-.211-.213Zm-12.461 0-.212.213.212-.213Zm0-24.414.21.214.001-.001-.211-.213Zm12.461 0-.213.211.001.001.212-.212Zm2.578 6.308.124.273.176-.08v-.193h-.3Zm-3.125 1.426h-.3v.467l.424-.194-.124-.273Zm-9.707-5.644.21.213.002-.001-.212-.212Zm0 20.215-.212.212.212-.212Zm8.027 0 .206.218.001-.001-.207-.217Zm1.68-8.536h.3v-.3h-.3v.3Zm-5.801 0-.275-.12-.184.42h.459v-.3Zm1.367-3.125v-.3h-.196l-.079.18.275.12Zm7.259 0v7.618h.6V13.69h-.6Zm0 7.618c0 2.314-.827 4.289-2.49 5.939l.423.426c1.775-1.761 2.667-3.889 2.667-6.365h-.6Zm-2.489 5.938c-1.662 1.637-3.663 2.453-6.02 2.453v.6c2.513 0 4.666-.877 6.441-2.625l-.421-.428Zm-6.02 2.453c-2.37 0-4.37-.816-6.019-2.452l-.423.426c1.763 1.75 3.917 2.626 6.442 2.626v-.6Zm-6.019-2.452c-1.663-1.65-2.49-3.625-2.49-5.94h-.6c0 2.477.893 4.605 2.667 6.366l.423-.426Zm-2.49-5.94V9.18h-.6v12.129h.6Zm0-12.128c0-2.315.827-4.283 2.49-5.92l-.422-.427c-1.775 1.749-2.667 3.87-2.667 6.347h.6Zm2.49-5.92c1.662-1.65 3.663-2.472 6.02-2.472v-.6c-2.514 0-4.667.884-6.443 2.646l.423.426Zm6.02-2.472c2.382 0 4.382.823 6.017 2.47l.426-.422c-1.751-1.764-3.905-2.648-6.444-2.648v.6Zm6.018 2.471c1.664 1.664 2.49 3.633 2.49 5.92h.6c0-2.45-.893-4.57-2.666-6.344l-.424.424Zm2.49 5.92v.176h.6V9.18h-.6Zm.175-.096-3.125 1.425.249.546 3.125-1.426-.249-.545Zm-2.7 1.698v-1.66h-.6v1.66h.6Zm0-1.66c0-1.631-.593-3.036-1.769-4.198l-.422.427c1.064 1.052 1.591 2.303 1.591 3.771h.6Zm-1.769-4.198c-1.175-1.16-2.585-1.746-4.215-1.746v.6c1.469 0 2.729.52 3.793 1.573l.422-.427Zm-4.215-1.746c-1.654 0-3.072.584-4.235 1.748l.424.424c1.05-1.05 2.315-1.572 3.811-1.572v-.6ZM94.84 4.923c-1.164 1.15-1.75 2.556-1.75 4.198h.6c0-1.483.522-2.734 1.572-3.77l-.422-.428Zm-1.75 4.198v12.246h.6V9.121h-.6Zm0 12.246c0 1.63.586 3.034 1.749 4.197l.424-.425c-1.051-1.05-1.572-2.303-1.572-3.772h-.6Zm1.749 4.197c1.163 1.163 2.58 1.748 4.235 1.748v-.6c-1.496 0-2.761-.523-3.811-1.573l-.424.425Zm4.235 1.748c1.58 0 2.987-.587 4.21-1.742l-.412-.436c-1.121 1.058-2.383 1.578-3.798 1.578v.6Zm4.211-1.743c1.181-1.126 1.773-2.534 1.773-4.202h-.6c0 1.51-.528 2.758-1.587 3.767l.414.435Zm1.773-4.202v-4.55h-.6v4.55h.6Zm-.3-4.85h-5.801v.6h5.801v-.6Zm-5.526.42 1.367-3.125-.55-.24-1.367 3.124.55.24Zm1.092-2.946h7.559v-.6h-7.559v.6Zm25.449 16.42.3.006v-.007h-.3Zm0-1.72h.3v-.582l-.474.338.174.244ZM114.172 9.492l-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275Zm0 14.473h-.3v.006l.3-.006Zm1.25 3.008.21-.214-.21.213Zm5.996 0-.212-.213.212.212Zm1.23-2.891.3.003v-.003h-.3Zm0-13.223-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275Zm-14.433 24.453-.063-.293-.313.067.087.308.289-.082Zm3.105-.664.281-.105-.09-.242-.253.054.062.293Zm1.035 1.504-.203.22.001.002.202-.222Zm5.918 0-.21-.214.21.214Zm1.55-3.008v-1.719h-.6v1.72h.6Zm-.474-1.963c-1.17.834-2.514 1.253-4.044 1.253v.6c1.647 0 3.115-.454 4.393-1.364l-.349-.489Zm-4.044 1.253c-1.952 0-3.615-.685-5.004-2.061l-.422.426c1.501 1.487 3.315 2.235 5.426 2.235v-.6Zm-5.004-2.061c-1.389-1.377-2.079-3.032-2.079-4.983h-.6c0 2.112.755 3.92 2.257 5.409l.422-.427Zm-2.079-4.983V9.492h-.6v13.164h.6Zm-.18-12.889 3.125-1.367-.24-.55-3.125 1.367.24.55Zm2.705-1.642v14.473h.6V8.125h-.6Zm0 14.48c.028 1.282.472 2.361 1.339 3.214l.421-.427c-.747-.736-1.136-1.662-1.16-2.8l-.6.012Zm1.339 3.214c.894.88 2.013 1.317 3.336 1.317v-.6c-1.177 0-2.142-.383-2.915-1.144l-.421.427Zm3.336 1.317c1.178 0 2.21-.446 3.083-1.318l-.424-.425c-.768.768-1.65 1.143-2.659 1.143v.6Zm3.083-1.318c.862-.862 1.304-1.9 1.318-3.1l-.6-.007c-.012 1.04-.389 1.93-1.142 2.682l.424.425Zm1.318-3.103v-.117h-.6v.117h.6Zm0-.117V9.492h-.6v13.106h.6Zm-.179-12.831 3.125-1.367-.241-.55-3.125 1.367.241.55Zm2.704-1.642v22.344h.6V8.125h-.6Zm0 22.344c0 1.95-.69 3.606-2.079 4.982l.423.426c1.502-1.488 2.256-3.297 2.256-5.408h-.6Zm-2.079 4.982c-1.389 1.377-3.051 2.062-5.003 2.062v.6c2.11 0 3.924-.748 5.426-2.236l-.423-.426Zm-5.003 2.062c-1.952 0-3.608-.685-4.984-2.061l-.424.424c1.489 1.489 3.297 2.236 5.408 2.236v-.6Zm-4.984-2.061c-.878-.878-1.468-1.863-1.779-2.956l-.577.164c.341 1.2.988 2.272 1.932 3.216l.424-.424Zm-2.004-2.58 3.105-.665-.125-.586-3.106.664.126.587Zm2.761-.853a4.17 4.17 0 0 0 1.113 1.62l.406-.442a3.573 3.573 0 0 1-.957-1.388l-.562.21Zm1.114 1.62c.949.867 2.028 1.31 3.23 1.31v-.6c-1.038 0-1.977-.378-2.825-1.153l-.405.444Zm3.23 1.31c1.178 0 2.216-.446 3.101-1.317l-.421-.428c-.782.77-1.671 1.144-2.68 1.144v.6Zm3.101-1.317c.867-.853 1.312-1.932 1.339-3.215l-.599-.013c-.025 1.139-.414 2.065-1.161 2.8l.421.428Zm16.332-8.026.204-.22-.204.22Zm5.918 0-.21-.214.21.213Zm1.25-3.008.3.006v-.006h-.3Zm0-7.07h.3v-.007l-.3.006Zm-1.25-3.008-.21.213.21-.213Zm-5.996 0-.212-.213.212.213Zm-1.23 2.89-.3-.003v.003h.3Zm-3.125 22.227h-.3v.458l.42-.183-.12-.275Zm2.168-27.364-.211-.213.211.213Zm10.41 0 .212-.212-.212.212Zm-9.453 18.399.174-.244-.474-.34v.584h.3Zm0 7.598.12.274.18-.078v-.197h-.3Zm-.3-13.672c0 1.28.47 2.363 1.405 3.228l.407-.44c-.81-.75-1.212-1.673-1.212-2.788h-.6Zm1.405 3.228c.936.867 2.017 1.31 3.231 1.31v-.6c-1.052 0-1.99-.378-2.824-1.15l-.407.44Zm3.231 1.31c1.178 0 2.216-.445 3.101-1.317l-.421-.427c-.782.769-1.671 1.144-2.68 1.144v.6Zm3.101-1.317c.867-.853 1.312-1.932 1.339-3.215l-.6-.013c-.024 1.139-.413 2.065-1.16 2.8l.421.428Zm1.339-3.221v-7.07h-.6v7.07h.6Zm0-7.077c-.027-1.283-.472-2.362-1.339-3.215l-.421.427c.747.736 1.136 1.662 1.16 2.8l.6-.012Zm-1.339-3.215c-.894-.88-2.013-1.317-3.336-1.317v.6c1.178 0 2.142.383 2.915 1.144l.421-.427Zm-3.336-1.317c-1.178 0-2.21.446-3.083 1.318l.424.425c.768-.768 1.65-1.143 2.659-1.143v-.6Zm-3.083 1.318c-.861.862-1.304 1.9-1.318 3.1l.6.007c.012-1.04.389-1.93 1.142-2.682l-.424-.425Zm-1.318 3.103v.117h.6v-.117h-.6Zm0 .117v7.07h.6v-7.07h-.6Zm-2.525 22.11V15.469h-.6v22.168h.6Zm0-22.168c0-1.951.69-3.606 2.079-4.982l-.422-.427c-1.502 1.489-2.257 3.297-2.257 5.409h.6Zm2.079-4.982c1.389-1.377 3.052-2.062 5.004-2.062v-.6c-2.111 0-3.925.747-5.426 2.235l.422.426Zm5.004-2.062c1.952 0 3.607.685 4.983 2.06l.424-.424c-1.489-1.488-3.297-2.236-5.407-2.236v.6Zm4.983 2.06c1.376 1.376 2.06 3.032 2.06 4.984h.6c0-2.11-.747-3.919-2.236-5.408l-.424.425Zm2.06 4.984v7.187h.6V15.47h-.6Zm0 7.187c0 1.952-.684 3.608-2.06 4.983l.424.425c1.489-1.489 2.236-3.297 2.236-5.408h-.6Zm-2.06 4.983c-1.376 1.376-3.031 2.061-4.983 2.061v.6c2.11 0 3.918-.748 5.407-2.236l-.424-.425Zm-4.983 2.061c-1.543 0-2.9-.425-4.084-1.272l-.349.488c1.291.924 2.772 1.384 4.433 1.384v-.6Zm-4.558-1.028v7.598h.6v-7.598h-.6Zm.18 7.323-3.125 1.367.24.55 3.125-1.368-.24-.55Zm31.057-13.534-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275Zm-14.726-9.453h.3v-.3h-.3v.3Zm-2.422 0-.275-.12-.184.42h.459v-.3Zm1.367-3.125v-.3h-.196l-.079.18.275.12Zm1.055 0v.3h.3v-.3h-.3Zm0-6.66-.12-.275-.18.078v.196h.3Zm3.125-1.368h.3V.03l-.42.183.12.275Zm0 8.028h-.3v.3h.3v-.3Zm9.922 0 .274.12.184-.42h-.458v.3Zm-1.368 3.125v.3h.197l.078-.18-.275-.12Zm-8.554 0v-.3h-.3v.3h.3Zm0 10.957h-.3v.006l.3-.006Zm1.25 3.008.209-.216h-.001l-.208.215Zm5.976-.02-.208-.215-.002.001.21.214Zm1.25-3.125.121.275h.001v-.001h.002l.001-.001h.001l.001-.001h.002v-.001h.002l.001-.001h.002v-.001h.001l.001-.001h.002l.001-.001h.001l.001-.001h.002l.001-.001h.001l.001-.001h.001l.001-.001h.001l.001-.001h.002l.001-.001h.001l.001-.001.002-.001h.001l.001-.001h.002l.001-.001.001-.001h.002l.001-.001h.002l.001-.002h.003l.002-.002h.002l.001-.001h.002l.002-.002h.001l.002-.001h.002l.002-.002h.001l.002-.001h.002l.002-.002h.002l.002-.001.002-.001.002-.001.002-.001h.002l.002-.002h.002l.002-.002h.002l.002-.002h.002l.002-.001.003-.001.002-.001.002-.001.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001.003-.002h.002l.002-.002h.003l.003-.002h.002l.003-.002.002-.001.003-.001.002-.001.003-.002a329684015.386 329684015.386 0 0 0 .005-.002l.003-.001.003-.001.003-.002h.003l.002-.002.003-.001.003-.002h.003l.003-.002.003-.001.003-.002.003-.001.003-.001.003-.002.003-.001.003-.001.003-.002.003-.001.013-.006.003-.001.004-.002.003-.001a.04.04 0 0 1 .003-.001l.004-.002.003-.001.003-.002.004-.001.028-.013.004-.001.003-.002.004-.002a.013.013 0 0 1 .004-.001l.003-.002.004-.001.004-.002.004-.002a.016.016 0 0 1 .004-.001l.003-.002a.016.016 0 0 0 .004-.002.016.016 0 0 0 .004-.002l.004-.001.004-.002.004-.002.004-.001.004-.002.004-.002.004-.002c.001 0 .003 0 .004-.002a.015.015 0 0 0 .004-.001.015.015 0 0 0 .004-.002l.005-.002.004-.002.004-.002c.001 0 .003 0 .004-.002l.005-.001.004-.002.004-.002a.012.012 0 0 0 .004-.002l.005-.002.004-.002.005-.002a.012.012 0 0 1 .004-.002c.001 0 .003 0 .004-.002.002 0 .003 0 .005-.002.001 0 .003 0 .004-.002.002 0 .003 0 .005-.002.001 0 .003 0 .004-.002.002 0 .003 0 .005-.002l.019-.008.009-.004.009-.004a.025.025 0 0 0 .005-.002l.005-.002.01-.004a.025.025 0 0 1 .005-.002l.004-.002.005-.003a.02.02 0 0 0 .005-.002l.083-.036.01-.005.006-.002.005-.002.006-.003.005-.002.011-.005.023-.01.005-.002.006-.003.005-.002a.153.153 0 0 1 .006-.003l.012-.005.011-.005.006-.002.006-.003.006-.002.006-.003.048-.021.024-.01.013-.006.012-.006.007-.003a1237212803.597 1237212803.597 0 0 0 .019-.008l.013-.005a.161.161 0 0 1 .013-.006l.006-.003a.05.05 0 0 1 .007-.003l.013-.006.006-.002.007-.003.013-.006.027-.012.007-.003a.049.049 0 0 1 .007-.003l.006-.003c.003 0 .005-.002.007-.003a.049.049 0 0 0 .007-.003.049.049 0 0 0 .007-.003l.014-.006.028-.012.057-.025a.83.83 0 0 0 .029-.013l.03-.013.06-.026.016-.007.007-.003.008-.004c.003 0 .005-.002.008-.003l.007-.003a1.095 1.095 0 0 0 .048-.021l.015-.007.008-.003.008-.004.065-.028.067-.03.033-.014.017-.008.009-.003.009-.004.017-.008c.003 0 .005-.002.008-.003l.009-.004.035-.016c.003 0 .015-.006.018-.007a.281.281 0 0 1 .017-.008l.009-.004.009-.004c.003 0 .015-.006.018-.008.003 0 .006-.002.009-.004l.009-.003.018-.008.036-.016.019-.008.009-.004.009-.004.037-.017a12.492 12.492 0 0 0 .114-.05c.003 0 .017-.007.02-.008l.009-.004.01-.004.079-.035.08-.035.04-.018a.097.097 0 0 0 .01-.004l.011-.005.02-.009a5.551 5.551 0 0 0 .126-.054l.01-.005.011-.005.021-.009.011-.005a.098.098 0 0 1 .011-.004l.01-.005.011-.005.043-.019.088-.038.089-.04.091-.039.092-.04.094-.041.096-.042.048-.021a.627.627 0 0 1 .024-.01l.012-.006.013-.005-.241-.55-.024.01-.025.011a.627.627 0 0 0-.012.006l-.012.005-.024.01-.024.01-.012.006a.621.621 0 0 1-.012.005l-.023.01-.024.011-.012.005-.012.005-.023.01a.621.621 0 0 0-.012.006l-.012.005a.116.116 0 0 0-.011.005l-.012.005-.023.01-.012.005a.116.116 0 0 0-.011.005l-.012.005a.15.15 0 0 0-.011.005l-.023.01a.61.61 0 0 0-.012.005l-.011.005-.012.005-.011.005-.023.01-.011.005-.011.005-.045.02-.022.01-.011.004-.011.005-.022.01-.022.01a.12.12 0 0 0-.011.004l-.011.005-.022.01-.022.01a.43.43 0 0 0-.021.009l-.022.009-.021.01-.085.036-.021.01-.01.004-.011.005-.041.018-.01.004-.011.005-.02.009-.021.009a.097.097 0 0 1-.01.004l-.01.005-.04.017-.02.009-.01.004-.01.005-.02.008-.019.009-.04.017-.019.008a.368.368 0 0 0-.019.009l-.019.008-.01.004a.1.1 0 0 1-.01.005l-.038.016-.009.004-.009.005c-.004 0-.007.002-.01.004a.358.358 0 0 0-.009.004l-.074.032-.018.008-.009.004-.01.004a1.282 1.282 0 0 1-.036.016l-.009.004a.06.06 0 0 0-.008.004l-.009.003-.009.004-.018.008a.325.325 0 0 1-.026.012l-.009.003a.231.231 0 0 0-.017.008l-.009.004-.009.004a.077.077 0 0 0-.008.003l-.009.004a5.015 5.015 0 0 1-.034.015l-.017.008-.017.007-.033.015c-.003 0-.03.013-.033.014l-.017.007a.252.252 0 0 1-.016.007l-.032.014-.125.055-.031.013-.007.004c-.003 0-.005.002-.008.003a.224.224 0 0 1-.015.006l-.014.007-.008.003-.007.003-.015.007-.014.006-.057.025-.008.003-.007.003a.062.062 0 0 1-.007.003.049.049 0 0 1-.007.003l-.006.003-.007.003-.007.003-.007.003c-.002.002-.005.003-.007.003-.002.002-.005.003-.007.003a.049.049 0 0 1-.007.003l-.006.003-.007.003-.007.003-.013.006a.05.05 0 0 0-.007.003.04.04 0 0 1-.007.003l-.006.003-.007.003-.006.003-.007.002-.006.003-.007.003-.006.003a.04.04 0 0 0-.007.003l-.006.003-.007.002-.006.003-.006.003a.052.052 0 0 0-.007.003l-.006.003-.006.002-.007.003-.006.003-.006.003-.006.002-.006.003-.007.003-.006.002-.006.003-.006.003a968258454.986 968258454.986 0 0 1-.012.005l-.006.003a.155.155 0 0 1-.012.005.155.155 0 0 1-.006.002l-.006.003-.006.003a.023.023 0 0 1-.005.002l-.006.003-.006.002-.006.003a.153.153 0 0 0-.006.002l-.005.003-.006.002a.153.153 0 0 0-.006.003l-.005.002a.153.153 0 0 1-.006.003l-.006.002-.005.003c-.025.01.013-.006-.011.004l-.006.003-.005.002-.006.003-.005.002a.147.147 0 0 1-.011.005.023.023 0 0 0-.005.002l-.006.002-.082.037c-.002 0-.003 0-.005.002l-.005.002-.005.002-.005.002-.019.008-.019.009-.005.002-.004.002-.009.004-.005.002-.005.002-.004.002-.005.002-.004.002-.005.002-.004.002c-.001 0-.003 0-.004.002l-.035.014-.064.029-.11.048-.012.005-.006.002-.002.002-.003.001-.003.001-.003.002h-.003l-.003.002-.01.005a.827.827 0 0 0-.021.009l-.01.004-.004.002-.003.001-.002.001-.002.001-.003.001a.012.012 0 0 1-.004.002l-.009.004-.016.007-.027.012-.037.016-.009.004h-.002l-.001.001.12.275Zm2.825-1.367v1.562h.6v-1.562h-.6Zm0 1.562c0 1.952-.684 3.608-2.06 4.983l.424.425c1.489-1.489 2.236-3.297 2.236-5.408h-.6Zm-2.06 4.983c-1.376 1.376-3.032 2.061-4.983 2.061v.6c2.11 0 3.918-.748 5.407-2.236l-.424-.425Zm-4.983 2.061c-1.952 0-3.615-.685-5.004-2.061l-.422.426c1.501 1.487 3.315 2.235 5.426 2.235v-.6Zm-5.004-2.061c-1.389-1.377-2.079-3.032-2.079-4.983h-.6c0 2.112.754 3.92 2.257 5.409l.422-.427Zm-2.079-4.983V11.641h-.6v11.015h.6Zm-.3-11.315h-2.422v.6h2.422v-.6Zm-2.147.42 1.367-3.125-.55-.24-1.367 3.124.55.24Zm1.092-2.945h1.055v-.6h-1.055v.6Zm1.355-.3v-6.66h-.6v6.66h.6Zm-.18-6.386 3.125-1.367-.24-.55-3.125 1.368.24.55Zm2.705-1.642v8.028h.6V.488h-.6Zm.3 8.328h9.922v-.6h-9.922v.6Zm9.647-.42-1.367 3.124.549.24 1.367-3.124-.549-.24Zm-1.093 2.945h-8.554v.6h8.554v-.6Zm-8.854.3v10.957h.6V11.64h-.6Zm0 10.963c.027 1.295.472 2.376 1.341 3.217l.417-.431c-.745-.721-1.134-1.646-1.158-2.799l-.6.013Zm1.341 3.217c.9.872 1.963 1.315 3.178 1.315v-.6c-1.052 0-1.968-.377-2.76-1.146l-.418.43Zm3.178 1.315c1.239 0 2.317-.45 3.218-1.336l-.421-.428c-.792.78-1.72 1.164-2.797 1.164v.6Zm3.216-1.335c.898-.87 1.341-1.992 1.341-3.34h-.6c0 1.204-.39 2.165-1.158 2.91l.417.43Zm23.502-3.34-.12-.275-.18.079v.196h.3Zm3.125-1.367h.3v-.459l-.42.184.12.275ZM181.555 9.492l-.121-.275-.179.079v.196h.3Zm3.125-1.367h.3v-.459l-.421.184.121.275Zm0 14.473h-.3v.006l.3-.006Zm1.25 3.008.21-.214-.21.213Zm5.996-.098-.22-.204.22.204ZM181.281 4.902l-.215.21.003.002.212-.212Zm0-3.652.212.212.003-.003-.215-.209Zm3.594 0-.215.21.003.002.212-.212Zm0 3.652.212.212.003-.002-.215-.21Zm8.401 17.834 3.125-1.367-.24-.55-3.125 1.367.24.55Zm2.705-1.642v1.562h.6v-1.562h-.6Zm0 1.562c0 1.952-.684 3.608-2.06 4.983l.424.425c1.489-1.489 2.236-3.297 2.236-5.408h-.6Zm-2.06 4.983c-1.376 1.376-3.032 2.061-4.983 2.061v.6c2.11 0 3.918-.748 5.407-2.236l-.424-.425Zm-4.983 2.061c-1.953 0-3.615-.685-5.004-2.061l-.423.426c1.502 1.487 3.316 2.235 5.427 2.235v-.6Zm-5.004-2.061c-1.389-1.377-2.079-3.032-2.079-4.983h-.6c0 2.112.754 3.92 2.256 5.409l.423-.427Zm-2.079-4.983V9.492h-.6v13.164h.6Zm-.18-12.889L184.8 8.4l-.241-.55-3.125 1.367.241.55Zm2.705-1.642v14.473h.6V8.125h-.6Zm0 14.48c.027 1.282.472 2.361 1.339 3.214l.421-.427c-.747-.736-1.136-1.662-1.16-2.8l-.6.012Zm1.339 3.214c.894.88 2.013 1.317 3.336 1.317v-.6c-1.178 0-2.142-.383-2.915-1.144l-.421.427Zm3.336 1.317c1.186 0 2.22-.485 3.091-1.424l-.44-.408c-.77.831-1.65 1.232-2.651 1.232v.6Zm3.091-1.424c.869-.938 1.31-2.025 1.31-3.251h-.6c0 1.066-.378 2.01-1.15 2.843l.44.408Zm-10.65-21.019a2.238 2.238 0 0 1-.657-1.627h-.6c0 .794.277 1.481.827 2.046l.43-.419Zm-.657-1.627c0-.638.217-1.167.654-1.604l-.424-.424a2.772 2.772 0 0 0-.83 2.028h.6Zm.657-1.607c.439-.45.961-.67 1.582-.67v-.6c-.785 0-1.461.286-2.012.852l.43.418Zm1.582-.67c.622 0 1.143.22 1.582.67l.43-.418a2.716 2.716 0 0 0-2.012-.853v.6Zm1.585.673c.437.437.654.966.654 1.604h.6c0-.793-.277-1.476-.83-2.028l-.424.424Zm.654 1.604c0 .64-.217 1.176-.657 1.627l.43.419c.55-.565.827-1.252.827-2.046h-.6Zm-.654 1.624a2.148 2.148 0 0 1-1.585.655v.6c.782 0 1.458-.28 2.009-.83l-.424-.425Zm-1.585.655a2.15 2.15 0 0 1-1.585-.655l-.424.424c.551.552 1.227.83 2.009.83v-.6Z"
            mask="url(#a)"
        />
    </Svg>
)
export default Logo