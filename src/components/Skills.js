import React from "react";

import "./Skills.css";

const Skills = () => (
  <section className="skills" id="skills">
    <div>
      <h1 className="title skills__title ">Skills</h1>
      <p>
        This shows how much experience I had working with the different Frontend
        and Backend technologies.
      </p>

      <div className="skills__chart">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M148.81 269.17C214.558 269.17 267.857 216.082 267.857 150.593C267.857 85.1047 214.558 32.0159 148.81 32.0159C83.0613 32.0159 29.7619 85.1047 29.7619 150.593C29.7619 216.082 83.0613 269.17 148.81 269.17Z"
            fill="#FAFAFA"
          />
          <path
            opacity="0.201381"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 138.735H0L2.27738 164.303L12.4726 167.194L22.7262 164.304L25 138.735ZM8.09404 147.074L8.37023 150.297V150.298H19.7893L18.9036 159.97L12.5 161.681L6.04523 159.962L5.65237 155.016H8.75832L8.98213 157.518L12.5 158.479L15.9643 157.525L16.3524 153.463H5.48809L4.65714 143.965L20.3428 143.968L20.069 147.077L8.09404 147.074Z"
            fill="black"
          />
          <path
            opacity="0.201381"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M239.286 40.3163H267.857V68.7748H239.286V40.3163ZM265.517 61.9875C265.308 60.6891 264.459 59.5981 261.942 58.5807C261.767 58.4991 261.588 58.4224 261.411 58.3467L261.411 58.3467C260.704 58.0432 260.034 57.7557 259.802 57.229C259.694 56.8377 259.677 56.6242 259.748 56.393C259.926 55.627 260.837 55.3969 261.551 55.6104C262.015 55.7527 262.444 56.1084 262.713 56.6776C263.944 55.876 263.944 55.876 264.802 55.3436L264.802 55.3436C264.481 54.8456 264.321 54.6309 264.105 54.4187C263.355 53.5827 262.356 53.1558 260.731 53.1926L259.892 53.2981C259.087 53.4938 258.32 53.9207 257.856 54.4898C256.499 56.0207 256.89 58.6887 258.533 59.7914C259.215 60.2986 260.028 60.6398 260.766 60.9491C261.787 61.3774 262.662 61.7444 262.838 62.4061C263.124 63.7934 261.802 64.2381 260.498 64.078C259.532 63.8646 258.998 63.3831 258.408 62.4938L256.23 63.74C256.43 64.1955 256.653 64.4452 256.953 64.782C257.028 64.8661 257.108 64.9556 257.194 65.0551C259.265 67.1373 264.444 67.0306 265.374 63.8646L265.376 63.8563C265.419 63.7243 265.655 63.003 265.462 61.908L265.517 61.9875ZM252.146 53.3965H254.823L254.818 53.4629C254.818 54.2824 254.819 55.1 254.821 55.9162C254.824 57.5445 254.827 59.1674 254.818 60.7898C254.819 61.0109 254.822 61.2285 254.826 61.4424C254.846 62.6925 254.864 63.8157 254.345 64.7574C253.925 65.6111 253.121 66.1625 252.189 66.4305C250.757 66.7507 249.389 66.555 248.371 65.9503C247.688 65.5412 247.158 64.8985 246.795 64.1515L248.968 62.8175C248.983 62.8175 249.018 62.8772 249.065 62.959C249.082 62.9872 249.1 63.018 249.119 63.0499C249.396 63.5111 249.636 63.8313 250.107 64.0637C250.567 64.2072 251.579 64.3115 251.971 63.4945C252.163 63.1645 252.153 62.2406 252.142 61.1365C252.139 60.8601 252.136 60.5724 252.136 60.2799C252.136 59.1287 252.138 57.9819 252.141 56.8355C252.144 55.6901 252.146 54.5451 252.146 53.3965Z"
            fill="black"
          />
          <path
            opacity="0.201381"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M161.905 0H136.905L139.181 25.5676L149.377 28.4586L159.631 25.5688L161.905 0ZM141.559 5.22938L157.25 5.23294V5.23412L155.801 21.0571L149.405 22.8713L142.899 20.8519L142.553 16.2808H145.661L145.884 18.7828L149.403 19.7432L152.868 18.7899L153.303 14.6124H145.944L145.658 11.5614H153.563L153.867 8.34085L141.813 8.33848L141.559 5.22938Z"
            fill="black"
          />
          <g opacity="0.198661">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M277.75 147.773L277.592 147.219C277.536 147.022 277.483 146.829 277.434 146.638C277.625 146.584 277.82 146.533 278.019 146.482L278.581 146.341L278.739 146.896C278.797 147.095 278.857 147.293 278.919 147.49C278.717 147.535 278.514 147.582 278.312 147.631L277.75 147.773ZM281.569 147.034C280.679 147.144 279.795 147.296 278.919 147.49C279.188 148.341 279.498 149.179 279.847 150C279.652 150.376 279.465 150.755 279.283 151.138L279.165 151.389C278.617 150.218 278.147 149.012 277.758 147.779C274.575 148.669 272.621 150.032 272.621 151.39C272.621 152.748 274.575 154.111 277.758 155.002C278.148 153.769 278.617 152.563 279.165 151.392L279.283 151.643C279.465 152.026 279.653 152.405 279.847 152.781C279.497 153.603 279.188 154.441 278.919 155.293C278.713 155.247 278.511 155.199 278.311 155.149L277.749 155.008L277.592 155.563C277.536 155.759 277.483 155.953 277.435 156.143C273.608 155.074 271.429 153.357 271.429 151.39C271.429 149.424 273.608 147.707 277.434 146.638C276.452 142.808 276.857 140.074 278.571 139.089C280.252 138.123 282.901 139.163 285.714 141.884C285.572 142.022 285.43 142.164 285.287 142.31L284.882 142.723L285.287 143.137C285.431 143.287 285.574 143.437 285.714 143.59C285.108 144.246 284.534 144.931 283.993 145.643C283.568 145.663 283.143 145.691 282.719 145.727L282.439 145.751L282.279 145.98C282.036 146.327 281.799 146.679 281.569 147.034ZM287.435 145.643C286.289 145.587 285.14 145.587 283.993 145.643C283.741 145.975 283.496 146.312 283.258 146.656L283.098 146.884L282.818 146.908C282.401 146.941 281.984 146.983 281.569 147.034C281.256 147.518 280.956 148.006 280.671 148.496C280.385 148.991 280.11 149.492 279.847 150C280.01 150.383 280.182 150.763 280.362 151.139L280.482 151.392L280.362 151.644C280.182 152.019 280.01 152.399 279.847 152.781C280.11 153.289 280.385 153.79 280.671 154.285C280.958 154.778 281.257 155.265 281.567 155.744C280.643 155.631 279.757 155.48 278.919 155.293C278.857 155.49 278.797 155.688 278.739 155.887L278.581 156.441L278.019 156.298C277.82 156.248 277.625 156.197 277.435 156.143C276.451 159.972 276.857 162.707 278.571 163.69C279.009 163.937 279.505 164.063 280.007 164.056C281.594 164.056 283.607 162.939 285.713 160.896C287.82 162.939 289.833 164.056 291.423 164.056C291.925 164.063 292.42 163.937 292.857 163.69C294.572 162.707 294.976 159.971 293.995 156.143C297.82 155.074 300 153.358 300 151.39C300 149.423 297.821 147.706 293.995 146.637C294.977 142.808 294.572 140.074 292.857 139.089C291.174 138.124 288.526 139.164 285.714 141.884C285.856 142.022 285.999 142.164 286.142 142.31L286.546 142.724L286.142 143.137C285.998 143.287 285.855 143.437 285.714 143.59C286.321 144.246 286.895 144.931 287.435 145.643ZM288.988 145.751L288.711 145.727C288.286 145.691 287.861 145.663 287.435 145.643C287.687 145.975 287.932 146.312 288.169 146.655L288.33 146.884L288.608 146.908C289.026 146.94 289.443 146.982 289.858 147.033C290.48 147.994 291.055 148.984 291.581 149.999C291.418 150.382 291.246 150.762 291.065 151.138L290.945 151.39L291.065 151.643C291.246 152.019 291.418 152.399 291.582 152.783C291.057 153.798 290.482 154.786 289.861 155.746C289.444 155.797 289.027 155.839 288.608 155.871L288.33 155.895L288.169 156.124C287.932 156.467 287.687 156.805 287.435 157.137C286.856 157.165 286.28 157.179 285.714 157.179C285.147 157.179 284.571 157.165 283.991 157.137C283.738 156.805 283.493 156.467 283.256 156.124L283.096 155.895L282.817 155.871C282.393 155.836 281.976 155.794 281.567 155.744C281.798 156.1 282.035 156.453 282.279 156.801L282.438 157.029C281.144 156.915 279.859 156.716 278.59 156.435C277.774 159.622 277.985 161.985 279.168 162.665C280.343 163.332 282.552 162.303 284.882 160.047C284.003 159.095 283.187 158.088 282.44 157.03L282.719 157.054C283.144 157.089 283.568 157.116 283.991 157.137C284.531 157.849 285.106 158.535 285.713 159.192C285.573 159.344 285.431 159.494 285.287 159.643L284.882 160.057L285.287 160.471C285.429 160.617 285.572 160.758 285.713 160.896C285.855 160.758 285.997 160.617 286.139 160.471L286.544 160.057L286.139 159.643C285.996 159.494 285.854 159.344 285.713 159.192C286.32 158.535 286.894 157.849 287.435 157.137C287.859 157.117 288.285 157.089 288.711 157.054L288.987 157.03C288.241 158.088 287.426 159.096 286.546 160.047C288.404 161.848 290.162 162.87 291.421 162.87H291.423C291.74 162.87 292.024 162.801 292.261 162.665C293.444 161.985 293.655 159.622 292.838 156.435C291.57 156.716 290.285 156.914 288.99 157.029L289.149 156.801C289.393 156.453 289.63 156.102 289.861 155.746C290.75 155.636 291.634 155.484 292.509 155.291C292.571 155.488 292.631 155.686 292.689 155.885L292.848 156.441L293.411 156.298C293.61 156.248 293.804 156.197 293.995 156.143C293.946 155.953 293.894 155.759 293.838 155.563L293.679 155.008L293.117 155.149C292.915 155.199 292.712 155.246 292.509 155.291C292.241 154.44 291.931 153.603 291.582 152.783C291.776 152.406 291.964 152.026 292.145 151.643L292.264 151.393C292.835 152.624 293.307 153.834 293.67 155.002C296.855 154.111 298.807 152.748 298.807 151.39C298.807 150.032 296.854 148.67 293.67 147.779C293.282 149.011 292.812 150.217 292.264 151.388L292.145 151.138C291.964 150.755 291.776 150.375 291.581 149.999C291.931 149.178 292.24 148.34 292.509 147.489C292.712 147.534 292.915 147.582 293.117 147.631L293.679 147.772L293.838 147.218C293.894 147.021 293.946 146.828 293.995 146.637C293.805 146.583 293.61 146.531 293.411 146.481L292.848 146.34L292.689 146.895C292.631 147.094 292.571 147.292 292.509 147.489C291.633 147.295 290.748 147.143 289.858 147.033C289.628 146.678 289.392 146.327 289.149 145.98L288.989 145.751C290.348 145.874 291.64 146.075 292.838 146.345C293.655 143.158 293.444 140.796 292.261 140.116C291.085 139.439 288.874 140.477 286.546 142.734C287.426 143.685 288.242 144.693 288.988 145.751ZM288.988 145.751L288.988 145.751L288.989 145.751L288.989 145.751L288.988 145.751ZM292.264 151.388L292.263 151.39L292.264 151.393L292.265 151.39L292.264 151.388ZM288.99 157.029L288.988 157.029L288.987 157.03L288.989 157.03L288.99 157.029ZM282.44 157.03L282.439 157.029L282.438 157.029L282.439 157.03L282.44 157.03ZM279.165 151.392L279.164 151.39L279.165 151.389L279.166 151.39L279.165 151.392ZM285.714 148.859C284.805 148.859 283.964 149.342 283.509 150.127C283.054 150.912 283.054 151.879 283.509 152.663C283.964 153.448 284.805 153.931 285.714 153.931C286.624 153.931 287.465 153.448 287.92 152.663C288.374 151.879 288.374 150.912 287.92 150.127C287.465 149.342 286.624 148.859 285.714 148.859ZM279.168 140.116C279.406 139.98 279.688 139.911 280.007 139.911C281.267 139.911 283.025 140.933 284.882 142.734C284.002 143.685 283.186 144.693 282.439 145.751C281.145 145.865 279.859 146.064 278.591 146.345C277.775 143.158 277.985 140.796 279.168 140.116ZM288.331 155.894C286.568 156.026 284.861 156.026 283.099 155.894C282.114 154.46 281.24 152.955 280.483 151.39C281.238 149.824 282.112 148.319 283.099 146.887C284.84 146.755 286.589 146.755 288.33 146.887C289.316 148.319 290.191 149.825 290.945 151.39C290.189 152.955 289.315 154.461 288.331 155.894Z"
              fill="black"
            />
          </g>
          <path
            opacity="0.201381"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.247 42.6877C52.1369 42.696 51.0332 42.8568 49.9673 43.1656L49.8923 43.1893C49.2199 43.071 48.5392 43.0056 47.8566 42.9937C46.4542 42.97 45.2494 43.3091 44.278 43.8735C43.3208 43.5427 41.3351 42.9723 39.2423 43.0862C37.7851 43.1656 36.1946 43.6067 35.0161 44.8459C33.8411 46.085 33.2196 48.0024 33.3506 50.6111C33.3863 51.3308 33.5923 52.5048 33.9339 54.0249C34.2756 55.5451 34.7554 57.3249 35.3542 58.9483C35.953 60.5728 36.6089 62.0313 37.6339 63.0226C38.1458 63.5194 38.8506 63.9368 39.6816 63.9024C40.2649 63.8787 40.7923 63.6238 41.247 63.2479C41.4657 63.5347 41.6994 63.6621 41.9127 63.7782L41.9208 63.7826C42.1923 63.9309 42.4566 64.0317 42.7304 64.0981C43.222 64.2202 44.0637 64.3838 45.0494 64.2166C45.3851 64.1609 45.7387 64.0518 46.0911 63.8965C46.1033 64.2622 46.1176 64.6207 46.1321 64.9827L46.1351 65.0585L46.1408 65.2037C46.1869 66.3764 46.2295 67.4611 46.5851 68.4166C46.594 68.4408 46.6051 68.4799 46.6198 68.5314C46.7038 68.8261 46.9034 69.5262 47.4506 70.155C48.0935 70.8949 49.353 71.3562 50.7875 71.0503C51.7994 70.8344 53.0863 70.4455 53.9411 69.2336C54.7863 68.036 55.1673 66.3178 55.2423 63.5313C55.2613 63.3807 55.2839 63.2526 55.3077 63.1328L55.5089 63.1506H55.5327C56.6125 63.1992 57.7839 63.0463 58.7625 62.5933C59.6292 62.1937 60.2851 61.7894 60.7625 61.072C60.8816 60.8941 61.0125 60.6795 61.0482 60.3095C61.0839 59.9396 60.8708 59.3609 60.5173 59.0941C59.8965 58.6244 59.4778 58.723 59.0624 58.8208L59.0624 58.8208L59.0623 58.8208L59.0623 58.8208L59.0622 58.8208L59.0622 58.8208L59.0622 58.8208C59.0037 58.8346 58.9452 58.8484 58.8863 58.8605C58.4161 58.9641 57.9368 59.022 57.4554 59.0336C58.8316 56.7249 59.8185 54.2727 60.3816 52.1028C60.7149 50.8221 60.9018 49.6411 60.9173 48.6083C60.9327 47.5755 60.8482 46.6613 60.2268 45.8704C58.2851 43.3992 55.5554 42.7162 53.4435 42.6925C53.378 42.6913 53.3125 42.6901 53.247 42.6913V42.6877ZM53.191 43.4468C55.1887 43.4278 57.741 43.9863 59.5732 46.3187C59.9851 46.8429 60.1077 47.6089 60.0934 48.5527C60.078 49.4954 59.903 50.6243 59.5827 51.861C58.9613 54.2563 57.7875 57.0488 56.1339 59.5543C56.1923 59.5957 56.2554 59.6299 56.322 59.6563C56.6672 59.7986 57.4541 59.9207 59.0244 59.5994C59.4196 59.5164 59.7089 59.4607 60.0089 59.6883C60.1567 59.8131 60.2373 59.9996 60.2268 60.1923C60.2107 60.3362 60.1574 60.4735 60.072 60.5907C59.7684 61.0449 59.1696 61.4753 58.4018 61.8298C57.722 62.1453 56.747 62.3101 55.8827 62.3196C55.4494 62.3243 55.0494 62.2911 54.7101 62.1856L54.6887 62.1773C54.5577 63.4342 54.2565 65.916 54.0601 67.0484C53.903 67.9615 53.628 68.6872 53.103 69.2303C52.5791 69.7733 51.8375 70.1006 50.8399 70.314C49.6041 70.5785 48.703 70.2939 48.122 69.8065C47.5422 69.3204 47.2768 68.6753 47.1172 68.2804C47.0077 68.0077 46.9506 67.6544 46.8958 67.1824C46.841 66.7105 46.8006 66.133 46.7732 65.482C46.7367 64.4852 46.7248 63.4877 46.7375 62.4903C46.2213 62.9612 45.5798 63.2741 44.8899 63.3915C44.0696 63.5302 43.3375 63.3939 42.9006 63.2848C42.6852 63.2309 42.4773 63.1509 42.2815 63.0464C42.0791 62.9385 41.8863 62.8164 41.7577 62.5757C41.6822 62.4378 41.6581 62.2778 41.6899 62.1239C41.7301 61.968 41.8214 61.8298 41.9494 61.7314C42.1851 61.5405 42.497 61.4338 42.9672 61.3366C43.8232 61.1611 44.122 61.0413 44.3041 60.8978C44.4078 60.8152 44.5206 60.6762 44.6767 60.4836L44.6768 60.4836L44.6769 60.4835L44.677 60.4833L44.6773 60.483L44.6773 60.4829L44.6773 60.4829L44.6774 60.4828C44.7542 60.3881 44.8415 60.2805 44.9434 60.1603C44.9419 60.1441 44.9408 60.1279 44.9399 60.1117C44.3859 60.0961 43.8434 59.9507 43.3565 59.6871C43.178 59.8745 42.266 60.835 41.1541 62.1678C40.6863 62.7251 40.1696 63.0453 39.6244 63.0678C39.0791 63.0915 38.5863 62.8176 38.1672 62.4132C37.3303 61.6034 36.6625 60.2101 36.0803 58.6354C35.4994 57.0607 35.0268 55.3069 34.691 53.8128C34.3541 52.3188 34.1553 51.114 34.1268 50.533C34.0018 48.0642 34.5815 46.4006 35.5756 45.3512C36.5708 44.3017 37.9351 43.9045 39.2649 43.8286C41.6518 43.6923 43.9184 44.5211 44.3768 44.699C45.2601 44.1013 46.3982 43.729 47.8196 43.7527C48.4944 43.7622 49.1659 43.8489 49.8208 44.0112L49.8446 44.0006C50.1329 43.8996 50.4266 43.8149 50.7244 43.7468C51.533 43.5589 52.3596 43.4591 53.1899 43.4492L53.191 43.4468ZM53.1982 44.241H53.372V44.2398C55.1839 44.2541 57.3458 44.7722 58.9434 46.807C59.147 47.0655 59.3065 47.6845 59.2946 48.5382C59.2803 49.392 59.1172 50.4699 58.8101 51.6592C58.2363 53.8683 57.1601 56.4592 55.6672 58.8011C55.6522 58.7821 55.6373 58.7632 55.6225 58.7442C55.5929 58.7063 55.5633 58.6683 55.5315 58.6304C56.0958 57.6972 56.2006 56.7462 56.1577 55.8806C56.1381 55.4804 56.0921 55.0948 56.0484 54.7277C55.9915 54.2495 55.9383 53.8028 55.9518 53.3964C55.9654 52.9602 56.023 52.5795 56.0803 52.2015C56.1531 51.7205 56.2253 51.2436 56.2053 50.662C56.2058 50.6606 56.207 50.6585 56.2083 50.6562C56.2103 50.6527 56.2125 50.6487 56.2125 50.6466C56.2315 50.5671 56.2291 50.5209 56.2268 50.4758C56.2208 50.3857 56.2041 50.2991 56.1791 50.196C56.1291 49.9908 56.041 49.7264 55.9101 49.4133C55.5639 48.5985 55.1108 47.8329 54.5625 47.1367C53.7732 46.1311 52.653 45.1232 51.1696 44.4687C51.8367 44.3267 52.5161 44.2505 53.1982 44.241ZM47.6696 44.5448C46.2625 44.5483 45.2529 44.9716 44.4875 45.606C43.6982 46.2618 43.1684 47.1594 42.8208 48.0784C42.4077 49.1693 42.266 50.2246 42.2101 50.9408L42.2256 50.9313C42.6506 50.6942 43.2089 50.457 43.8065 50.3195C44.4041 50.1831 45.0482 50.1404 45.6315 50.3657C46.2148 50.591 46.697 51.1211 46.872 51.925C47.5838 55.2053 46.8984 56.7354 46.4277 57.786C46.3442 57.9723 46.2675 58.1436 46.2065 58.3068C46.053 58.6997 45.9214 59.1007 45.8125 59.508L45.8432 59.5007C45.8841 59.4909 45.9251 59.481 45.966 59.4772C46.2517 59.4535 46.4756 59.5484 46.6089 59.6053C47.016 59.7736 47.2958 60.127 47.447 60.5302C47.4863 60.6357 47.5148 60.7495 47.5315 60.8669C47.5491 60.9151 47.5572 60.9663 47.5553 61.0175C47.5102 62.4947 47.5153 63.9731 47.5708 65.4499C47.5982 66.0879 47.6387 66.6499 47.6898 67.0934C47.741 67.5357 47.8137 67.8725 47.8601 67.9863C48.0125 68.3658 48.2351 68.8626 48.6375 69.2005C49.0398 69.5373 49.6172 69.7626 50.672 69.5373C51.5863 69.3417 52.1506 69.0701 52.5279 68.68C52.9041 68.2899 53.1291 67.7468 53.2732 66.9156C53.4887 65.6705 53.922 62.0598 53.9744 61.3804C53.9506 60.8681 54.0268 60.4744 54.191 60.1744C54.3601 59.8661 54.622 59.6776 54.8482 59.5756C54.9613 59.5246 55.0672 59.4902 55.1541 59.4653C55.0621 59.3337 54.9656 59.2051 54.8648 59.08C54.5387 58.686 54.2717 58.2471 54.072 57.7768C53.9764 57.5826 53.8743 57.3916 53.766 57.2041L53.7076 57.0991C53.5598 56.8339 53.3827 56.516 53.1982 56.1642C52.7791 55.3638 52.3232 54.3938 52.0863 53.4487C51.8506 52.5049 51.816 51.5278 52.4208 50.8388C52.9565 50.227 53.897 49.9732 55.3089 50.1155C55.2972 50.0806 55.2869 50.0474 55.2764 50.014L55.2764 50.0139L55.2764 50.0138L55.2764 50.0138C55.2496 49.9281 55.2225 49.8412 55.172 49.7218C54.8528 48.9735 54.4361 48.2702 53.9327 47.6301C52.7363 46.1064 50.7994 44.5958 47.8065 44.5471H47.6696V44.5448ZM39.3101 44.6195C39.4597 44.6112 39.6105 44.6064 39.7613 44.6064C39.9122 44.6066 40.063 44.6106 40.2137 44.6183C41.6184 44.687 42.916 45.0523 43.647 45.2918C42.9029 46.0175 42.4065 46.9139 42.0732 47.7961C41.6062 49.0795 41.3677 50.4342 41.3684 51.7993V51.8005L41.3696 51.8076V51.8135C41.3694 51.821 41.3694 51.8286 41.3696 51.8361C41.3696 51.9536 41.3787 52.1028 41.39 52.2886C41.404 52.517 41.4213 52.8008 41.4291 53.1487C41.4434 53.7962 41.4268 54.6155 41.3041 55.4918C41.0972 56.8914 41.621 58.2995 42.6934 59.227C41.9497 60.0137 41.231 60.8236 40.5387 61.6555C40.1589 62.1096 39.8482 62.2578 39.5898 62.2697C39.3327 62.2804 39.0494 62.1535 38.7232 61.8393C38.0756 61.2108 37.3934 59.8827 36.8303 58.3566C36.2684 56.8305 35.8006 55.1029 35.4708 53.6349C35.1398 52.1669 34.947 50.9313 34.9244 50.4902C34.8077 48.1602 35.3434 46.7527 36.1577 45.8942C36.9708 45.0357 38.1077 44.6882 39.3101 44.6195ZM54.522 50.8697C53.7136 50.8803 53.2601 51.0878 53.022 51.3594C52.6851 51.7448 52.6529 52.4206 52.8625 53.2531C53.0708 54.0867 53.5017 55.0187 53.9065 55.793C54.0902 56.1449 54.2689 56.4645 54.4187 56.7324L54.4636 56.8127L54.5181 56.9096L54.5181 56.9097L54.5181 56.9097L54.5181 56.9098L54.5182 56.9098L54.5182 56.9099C54.65 57.1444 54.7482 57.3191 54.8113 57.4709C54.8767 57.6297 54.9494 57.7697 55.0232 57.9001C55.3363 57.242 55.3922 56.5958 55.3601 55.9222C55.3434 55.5878 55.3021 55.2502 55.2605 54.9102L55.2605 54.9102C55.1985 54.4027 55.1358 53.8897 55.1529 53.3728C55.1697 52.8454 55.2324 52.4143 55.2909 52.0114L55.2909 52.0114C55.3444 51.6434 55.3944 51.299 55.4029 50.9266C55.1108 50.8889 54.8165 50.8699 54.522 50.8697ZM43.9863 51.0938C44.2267 51.0377 44.4727 51.0083 44.7196 51.006C44.9319 51.0014 45.1433 51.0351 45.3434 51.1056C45.7006 51.2432 45.9601 51.4874 46.0911 52.0922C46.7538 55.1465 46.2175 56.3218 45.7388 57.371L45.7388 57.371C45.6388 57.5902 45.5413 57.804 45.4577 58.0282L45.3986 58.1852C45.2525 58.5727 45.1124 58.9443 45.0232 59.3112C43.2875 59.3088 41.8101 57.6297 42.0946 55.6021C42.2256 54.6689 42.2422 53.8068 42.228 53.1309C42.2176 52.6839 42.1967 52.3406 42.1832 52.1193V52.1193C42.178 52.0348 42.174 51.9681 42.172 51.9202L42.1982 51.8965C42.3286 51.7947 42.4676 51.7042 42.6137 51.6262C43.0454 51.3888 43.507 51.2097 43.9863 51.0938ZM54.1445 51.2479H54.204C54.2826 51.2502 54.3552 51.2585 54.4183 51.274C54.4826 51.2882 54.5374 51.3095 54.5826 51.3392C54.6296 51.3681 54.662 51.4155 54.6719 51.4696L54.6707 51.4791C54.673 51.5354 54.6585 51.5911 54.629 51.6392C54.5939 51.7043 54.5499 51.7641 54.4981 51.817C54.3773 51.9495 54.2156 52.038 54.0386 52.0684C53.8663 52.0892 53.6924 52.0457 53.5505 51.9463C53.4924 51.9074 53.4402 51.8602 53.3957 51.8064C53.3572 51.7641 53.3312 51.7119 53.3207 51.6558C53.3157 51.6005 53.3338 51.5456 53.3707 51.504C53.4098 51.4598 53.4571 51.4236 53.51 51.3973C53.6243 51.3333 53.779 51.2858 53.954 51.2597C54.0195 51.2502 54.0838 51.2455 54.1445 51.2443V51.2479ZM45.0327 51.4625C44.9648 51.453 44.8982 51.4471 44.8351 51.4471L44.8339 51.4518C44.7102 51.4456 44.5864 51.4617 44.4684 51.4992C44.3648 51.536 44.2589 51.6024 44.241 51.7305C44.2334 51.8039 44.2506 51.8777 44.2898 51.9403C44.3271 52.0115 44.3744 52.077 44.4303 52.1348C44.5617 52.2784 44.7378 52.3737 44.9303 52.4052C45.1186 52.4282 45.3088 52.3804 45.4636 52.2712C45.5278 52.2285 45.5852 52.1766 45.6339 52.117C45.6807 52.066 45.7117 52.0026 45.7232 51.9344C45.7308 51.8612 45.7075 51.7882 45.6589 51.7328C45.6147 51.6812 45.5609 51.6385 45.5005 51.6071C45.3767 51.536 45.2148 51.4874 45.0327 51.4625ZM55.6207 60.1542L55.6172 60.1554C55.538 60.1838 55.4652 60.2047 55.398 60.224L55.3979 60.224C55.3165 60.2474 55.2432 60.2685 55.1767 60.2977C55.0539 60.3448 54.9527 60.4351 54.8922 60.5514C54.8172 60.6878 54.7529 60.9297 54.7719 61.3412C54.8258 61.3781 54.8853 61.4061 54.9481 61.4242C55.1517 61.4858 55.4934 61.5261 55.8743 61.5202C56.6338 61.5119 57.5684 61.3352 58.0648 61.1052C58.472 60.9168 58.8501 60.6712 59.1874 60.3759H59.1862C57.5279 60.7175 56.591 60.6261 56.016 60.3902C55.8732 60.331 55.74 60.2511 55.6207 60.153V60.1542ZM46.0351 60.2657H46.0601V60.2681C46.1444 60.2784 46.2264 60.3025 46.3029 60.3393C46.4315 60.3926 46.6137 60.5835 46.697 60.8053C46.7791 61.027 46.7684 61.2333 46.6684 61.3732C46.0887 62.1831 45.4089 62.495 44.7553 62.6065C44.1018 62.7167 43.4756 62.6065 43.0946 62.5116C42.9601 62.4772 42.7934 62.4144 42.6637 62.3432C42.6277 62.3245 42.6181 62.3152 42.6044 62.3021C42.5982 62.2961 42.5911 62.2893 42.5803 62.2804C42.6875 62.2294 42.8482 62.1665 43.1291 62.1096C44.016 61.9282 44.4601 61.7835 44.8018 61.5132C45.0105 61.3472 45.146 61.1742 45.3143 60.9592C45.4214 60.8224 45.5418 60.6685 45.7029 60.4887C45.8803 60.293 45.972 60.2717 46.0351 60.2657Z"
            fill="black"
          />
          <path
            opacity="0.201381"
            d="M148.73 271.724L137.575 278.162C137.158 278.403 136.904 278.848 136.905 279.328V292.21C136.905 292.689 137.161 293.135 137.576 293.375L148.731 299.819C149.148 300.06 149.659 300.06 150.076 299.819L161.226 293.377C161.643 293.134 161.898 292.692 161.899 292.213V279.328C161.899 278.849 161.642 278.403 161.225 278.161L150.077 271.723C149.661 271.482 149.146 271.482 148.732 271.723"
            fill="black"
          />
          <path
            opacity="0.201381"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.506 238.079C59.5822 235.504 58.5583 233.046 54.9476 232.423L54.9512 232.411L50.5952 234.832L58.1333 240.953L58.8655 241.557L48.3655 242.232L49.5441 246.857L51.206 253.297L40.1881 249.791L40.1691 249.827L40.2048 249.819L36.8655 260.661L36.2667 259.272L32.9107 251.462L30.9524 255.019C31.1306 260.45 35.0219 260.621 36.7811 260.695L36.7738 260.696H36.7929L36.7892 260.696C36.7865 260.695 36.7838 260.695 36.7811 260.695L57.8988 259.254L59.5238 238.043L59.506 238.079ZM48.8714 233.787C46.7702 231.675 41.2988 234.151 37.0595 238.34L37.056 238.344C32.8095 242.533 30.6536 247.798 32.756 249.905C34.8524 252.012 40.2571 249.401 44.4988 245.213C48.7464 241.026 50.9691 235.894 48.8714 233.787Z"
            fill="black"
          />
          <path
            opacity="0.201381"
            d="M262.555 240.629L250.08 228.205C249.361 227.49 248.196 227.49 247.475 228.205L244.89 230.784L248.176 234.057C248.944 233.802 249.818 233.974 250.425 234.579C251.039 235.19 251.208 236.071 250.946 236.832L254.111 239.987C254.879 239.722 255.762 239.894 256.373 240.502C257.231 241.356 257.231 242.736 256.373 243.59C255.517 244.443 254.133 244.443 253.277 243.59C252.636 242.949 252.475 242.005 252.796 241.223L249.833 238.287V246.025C250.043 246.126 250.24 246.265 250.414 246.437C251.263 247.292 251.263 248.67 250.414 249.52C249.558 250.375 248.165 250.375 247.308 249.52C246.452 248.668 246.452 247.292 247.308 246.44C247.525 246.226 247.769 246.065 248.029 245.958V238.145C247.77 238.037 247.524 237.882 247.314 237.67C246.665 237.023 246.51 236.078 246.843 235.287L243.614 232.056L235.06 240.571C234.345 241.289 234.345 242.449 235.06 243.167L247.536 255.59C248.255 256.306 249.419 256.306 250.138 255.59L262.555 243.223C263.275 242.508 263.275 241.347 262.555 240.629"
            fill="black"
          />
          <path
            d="M148.81 32.0159V269.17"
            stroke="#EAEAEA"
            stroke-dasharray="3"
          />
          <path
            d="M60.5495 70.6681L236.379 230.497"
            stroke="#EAEAEA"
            stroke-dasharray="3"
          />
          <path
            d="M236.379 70.6681L62.7589 230.497"
            stroke="#EAEAEA"
            stroke-dasharray="3"
          />
          <path
            d="M29.7619 151.56H267.857"
            stroke="#EAEAEA"
            stroke-dasharray="3"
          />
          <path
            className="line"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M148.445 41.2868C148.644 40.7566 149.243 40.4976 149.766 40.7159L230.844 74.5843C231.097 74.6901 231.296 74.8954 231.393 75.152L260.69 152.313C260.81 152.631 260.761 152.988 260.559 153.262L216.922 212.354C216.759 212.575 216.512 212.719 216.239 212.753L149.905 220.842C149.589 220.881 149.273 220.766 149.055 220.534L114.621 183.88C114.518 183.77 114.392 183.686 114.252 183.632L37.3865 153.923C36.5258 153.59 36.5366 152.368 37.4031 152.051L117.466 122.721C117.739 122.621 117.956 122.406 118.058 122.134L148.445 41.2868Z"
            stroke="#DD318D"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default Skills;