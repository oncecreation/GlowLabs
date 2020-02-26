import React from "react";
import { Spring } from "react-spring/renderprops";

const Cream = props => {
  return (
    <Spring
      from={{ display: "none", opacity: "0" }}
      to={{ display: "inline", opacity: "1" }}
      config={{
        delay:
          props.initialScreenSize >= 600
            ? props.currentScreenSize >= 600
              ? 5000
              : 4000
            : 4000,
        duration: 1500
      }}
    >
      {props => (
        <svg
          className="cream"
          width="100%"
          style={{
            display: `${props.display}`,
            opacity: `${props.opacity}`
          }}
          viewBox="0 0 50 50"
        >
          <g id="layer1" transform="translate(20 -550) scale(2)">
            <g
              id="g837"
              transform="matrix(.15858 0 0 .17902 126.481 328.497)"
              strokeWidth=".265"
            >
              <path
                d="M-780.728-179.419c-2.585-.71-5.462-3.65-6.168-6.301-.486-1.827-.543-24.917-.064-25.968.308-.675 1.258-1.072 3-1.252l.793-.082.146-2.25c.156-2.39.713-3.857 1.88-4.944.803-.75 2.812-1.657 3.684-1.664.6-.005.719-.165.985-1.321 1.213-5.253 6.122-9.954 11.297-10.818.873-.146 5.04-.338 9.26-.428 4.22-.089 8.19-.232 8.821-.316 2.353-.316 4.295-2.58 4.677-5.453.237-1.785.935-2.572 2.279-2.572.801 0 1.184.19 1.933.962 2.2 2.264 3.64 5.383 4.256 9.217.365 2.268.366 2.765.003 4.853-.222 1.279-.692 3.063-1.046 3.965l-.643 1.64h1.294c1.722 0 3.929.858 4.935 1.918 1.304 1.374 1.741 2.51 1.91 4.962l.156 2.249 1.437.175c2.556.312 2.412-.563 2.335 14.245-.066 12.52-.082 12.862-.64 14.069-.66 1.429-2.397 3.405-3.7 4.21-2.098 1.297-2.043 1.295-27.61 1.273-18.926-.016-24.21-.094-25.21-.369z"
                id="path851"
                fill="#cfeafd"
              />
              <path
                d="M-780.785-179.615c-1.27-.44-1.962-.924-3.463-2.426-1.561-1.563-1.971-2.163-2.448-3.582-.552-1.647-.572-2.108-.572-13.646v-11.941l.596-.536c.327-.295.833-.638 1.124-.763.291-.125 7.197-.291 15.346-.37l14.817-.143.072-4.3.073-4.3h10.964c10.32 0 11.046.032 12.38.53 2.48.929 3.645 2.696 3.838 5.82.068 1.092.242 2.134.387 2.316.147.184.842.33 1.566.33 1.03 0 1.439.136 1.952.65l.65.65v12.135c0 10.592-.056 12.302-.438 13.44-.925 2.755-3.254 5.132-6.054 6.18-1.444.54-1.808.547-25.334.527-23.45-.02-23.897-.03-25.456-.57zm25.4-16.077v-7.54l-7.895-.07c-4.944-.045-8.283.034-8.933.209-1.282.345-2.748 1.6-3.429 2.934-.431.846-.513 1.564-.513 4.505 0 3.013.077 3.658.555 4.646.543 1.122 2.175 2.512 3.283 2.796.29.074 4.218.119 8.73.098l8.202-.037zm-21.163-26.452c-.088-.142-.024-.764.143-1.382 1.394-5.177 6.181-9.65 11.23-10.493.873-.146 5.04-.338 9.26-.428 4.22-.089 8.19-.232 8.821-.316 2.353-.316 4.295-2.58 4.677-5.453.237-1.784.935-2.572 2.279-2.572.801 0 1.184.19 1.933.962 2.2 2.264 3.64 5.383 4.256 9.217.365 2.267.366 2.765.004 4.84-.394 2.262-1.24 4.894-1.785 5.553-.346.419-40.56.49-40.818.072z"
                id="path849"
                fill="#b6e2fc"
              />
              <path
                d="M-780.653-179.754c-2.494-.989-4.944-3.486-5.908-6.022l-.707-1.857v-23.358l.77-.648.77-.648 27.904-.196c15.348-.108 29.053-.11 30.456-.005 1.924.144 2.713.318 3.208.708l.657.516v11.953c0 11.41-.025 12.019-.543 13.38-1.133 2.983-3.383 5.24-6.336 6.357-1.437.543-1.762.55-25.003.526l-23.548-.025-1.72-.681zm43.26-8.438c2.309-1.243 3.106-2.77 3.256-6.241.221-5.104-.513-7.076-3.186-8.557l-1.394-.772-15.978-.074c-18.398-.085-18.035-.122-20.17 2.018-1.538 1.542-1.939 3.147-1.764 7.07.138 3.109.756 4.724 2.24 5.856 1.78 1.357 2.121 1.38 19.665 1.323 16.102-.053 16.283-.06 17.33-.623zm-39.155-33.952c-.088-.142-.024-.764.143-1.382 1.394-5.177 6.181-9.65 11.23-10.493.873-.146 5.04-.338 9.26-.428 4.22-.089 8.19-.232 8.821-.316 2.353-.316 4.295-2.58 4.677-5.453.237-1.784.935-2.572 2.279-2.572.801 0 1.184.19 1.933.962 2.2 2.264 3.64 5.383 4.256 9.217.365 2.267.366 2.765.004 4.84-.394 2.262-1.24 4.894-1.785 5.553-.346.419-40.56.49-40.818.072z"
                id="path847"
                fill="#fcdcac"
              />
              <path
                d="M-780.653-179.754c-2.494-.989-4.944-3.486-5.908-6.022l-.707-1.857v-23.358l.77-.648.77-.648 27.904-.196c15.348-.108 29.053-.11 30.456-.005 1.924.144 2.713.318 3.208.708l.657.516v11.953c0 11.41-.025 12.019-.543 13.38-1.133 2.983-3.383 5.24-6.336 6.357-1.437.543-1.762.55-25.003.526l-23.548-.025-1.72-.681zm43.26-8.438c2.309-1.243 3.106-2.77 3.256-6.241.221-5.104-.513-7.076-3.186-8.557l-1.394-.772-15.978-.074c-18.398-.085-18.035-.122-20.17 2.018-1.538 1.542-1.939 3.147-1.764 7.07.138 3.109.756 4.724 2.24 5.856 1.78 1.357 2.121 1.38 19.665 1.323 16.102-.053 16.283-.06 17.33-.623zm-17.8-39.978l.072-5.754 4.366-.138c4.92-.156 5.856-.444 7.355-2.263.754-.914 1.64-3.361 1.64-4.526 0-.71.976-1.937 1.54-1.937 1.408 0 5.007 5.869 5.588 9.11.62 3.467.233 7.251-1.037 10.122l-.504 1.141h-19.09z"
                id="path845"
                fill="#fdc990"
              />
              <path
                d="M-780.653-179.754c-2.494-.989-4.944-3.486-5.908-6.022l-.707-1.857v-23.358l.77-.648.77-.648 27.904-.196c15.348-.108 29.053-.11 30.456-.005 1.924.144 2.713.318 3.208.708l.657.516v11.953c0 11.41-.025 12.019-.543 13.38-1.133 2.983-3.383 5.24-6.336 6.357-1.437.543-1.762.55-25.003.526l-23.548-.025-1.72-.681zm43.26-8.438c2.309-1.243 3.106-2.77 3.256-6.241.221-5.104-.513-7.076-3.186-8.557l-1.394-.772-15.978-.074c-18.398-.085-18.035-.122-20.17 2.018-1.538 1.542-1.939 3.147-1.764 7.07.138 3.109.756 4.724 2.24 5.856 1.78 1.357 2.121 1.38 19.665 1.323 16.102-.053 16.283-.06 17.33-.623z"
                id="path843"
                fill="#5ed9e3"
              />
              <path
                d="M-779.643-179.81c-1.117-.406-2.387-.991-2.82-1.3-1.568-1.116-3.132-3.149-3.73-4.846-.324-.916-.698-1.873-.831-2.126-.137-.258-.244-5.25-.244-11.393v-10.935l.811-.777.811-.777h60.777l.683.642.683.641v22.488l-.696 1.74c-1.194 2.99-2.897 4.986-5.115 5.997-.515.235-1.42.653-2.012.93-1.032.482-1.994.502-23.68.48l-22.604-.024zm41.341-7.573c1.916-.562 3.986-2.618 4.436-4.406.436-1.732.39-6.181-.08-7.758-.507-1.696-1.727-3.145-3.333-3.96l-1.288-.652-16.611.012c-13.184.009-16.816.085-17.604.366-1.598.57-2.75 1.627-3.551 3.258-.707 1.44-.748 1.713-.737 4.963.01 3.068.077 3.569.625 4.63 1.103 2.14 2.547 3.232 4.879 3.694.605.12 8.013.23 16.463.246 13.341.025 15.554-.026 16.801-.393z"
                id="path841"
                fill="#03d9d8"
              />
              <path
                d="M-755.194-182.926l.073-3.902 8.343-.133c8.306-.131 8.348-.135 9.654-.808 1.524-.785 2.896-2.446 3.32-4.02.475-1.766.213-7.51-.4-8.762-.726-1.483-2.126-2.724-3.763-3.337-1.32-.494-2.048-.535-9.366-.535h-7.935l.074-3.77.073-3.77 12.7-.082c14.971-.095 17.278.012 18.243.84l.675.58v11.175c0 6.922-.1 11.348-.263 11.633-.145.253-.516 1.174-.826 2.047-.44 1.243-.943 1.965-2.317 3.325-1.48 1.466-2.1 1.87-3.96 2.58l-2.204.842h-22.194z"
                id="path839"
                fill="#00c1bf"
              />
            </g>
          </g>
        </svg>
      )}
    </Spring>
  );
};

export default Cream;
