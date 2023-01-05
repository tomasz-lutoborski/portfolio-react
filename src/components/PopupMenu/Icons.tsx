import styled, { DefaultTheme } from "styled-components";
import { devices } from "../../utils/mediaQueries";

const Icon = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;

  @media ${devices.tablet} {
    width: 3rem;
  }
`;

export const GoalsIcon = ({ theme }: { theme: DefaultTheme }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 230 230"
  >
    <g>
      <g>
        <path
          style={{ fill: theme.iconFill }}
          d="M106.649,107.81l16.491-16.491c-4.911-2.48-10.383-4.003-16.246-4.003
			c-20.065,0-36.387,16.323-36.387,36.387c0,20.059,16.323,36.387,36.387,36.387s36.387-16.328,36.387-36.387
			c0-5.863-1.523-11.335-4.003-16.246l-16.491,16.491c-0.131,8.664-7.196,15.675-15.893,15.675c-8.779,0-15.92-7.141-15.92-15.92
			C90.974,115.006,97.979,107.941,106.649,107.81z"
        />
        <path
          style={{ fill: theme.iconFill }}
          d="M148.769,65.696c-11.797-8.534-26.238-13.636-41.875-13.636c-39.509,0-71.643,32.139-71.643,71.643
			c0,39.498,32.134,71.638,71.643,71.638s71.643-32.139,71.643-71.638c0-15.643-5.096-30.078-13.63-41.864l-14.724,14.713
			c4.966,7.881,7.881,17.166,7.881,27.152c0,28.212-22.958,51.165-51.171,51.165s-51.171-22.958-51.171-51.165
			c0-28.218,22.958-51.171,51.171-51.171c9.986,0,19.271,2.921,27.152,7.876L148.769,65.696z"
        />
        <path
          style={{ fill: theme.iconFill }}
          d="M175.442,71.287c11.166,14.56,17.873,32.7,17.873,52.416c0,47.652-38.77,86.416-86.427,86.416
			s-86.427-38.764-86.427-86.416s38.77-86.421,86.427-86.421c19.717,0,37.856,6.706,52.416,17.873l14.609-14.609
			c-18.357-14.816-41.652-23.736-67.02-23.736C47.956,16.809,0,64.76,0,123.698s47.956,106.883,106.894,106.883
			s106.894-47.945,106.894-106.883c0-25.368-8.926-48.663-23.736-67.015L175.442,71.287z"
        />
        <path
          style={{ fill: theme.iconFill }}
          d="M223.779,19.997h-13.184V6.84c0-3.769-3.062-6.821-6.821-6.821c-3.769,0-6.831,3.051-6.831,6.821
			v17.149l-6.396,6.402v-3.867c0-3.769-3.057-6.821-6.821-6.821c-3.769,0-6.826,3.051-6.826,6.821v17.514l-74.831,74.836
			c-2.665,2.665-2.665,6.984,0,9.649c1.327,1.333,3.078,1.996,4.824,1.996s3.497-0.664,4.824-1.996l75.201-75.195h16.818
			c3.764,0,6.821-3.057,6.821-6.826s-3.057-6.821-6.821-6.821h-3.176l6.037-6.037h17.182c3.758,0,6.821-3.057,6.821-6.826
			S227.543,19.997,223.779,19.997z"
        />
      </g>
    </g>
  </Icon>
);

export const TechStackIcon = ({ theme }: { theme: DefaultTheme }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 52 52"
  >
    <g>
      <g>
        <path
          style={{ fill: theme.iconFill }}
          d="M38.529,26.286c3.226,0,6.259-1.259,8.542-3.542c3.551-3.55,4.531-9.013,2.437-13.596c-0.3-0.648-0.898-1.112-1.615-1.243
			c-0.125-0.021-0.25-0.031-0.375-0.031c-0.584,0-1.134,0.227-1.55,0.641l-3.553,3.556l-1.658-0.128l-0.128-1.658l3.551-3.554
			c0.509-0.503,0.736-1.229,0.609-1.941c-0.128-0.706-0.594-1.305-1.245-1.602c-1.572-0.719-3.316-1.098-5.047-1.098
			c-3.226,0-6.26,1.256-8.544,3.537c-3.181,3.183-4.322,7.743-3.038,12.008l-1.594,1.594L8.815,2.725
			c-0.706-0.706-1.955-0.706-2.661,0L0.551,8.329c-0.734,0.735-0.734,1.926,0,2.661l16.504,16.505L5.7,38.848
			c-1.944,1.946-1.959,5.093-0.036,7.021l1.165,1.166c0.926,0.926,2.162,1.436,3.478,1.436c1.335,0,2.593-0.521,3.542-1.469
			l14.591-14.592l16.803,15.547c0.368,0.367,0.849,0.552,1.331,0.552c0.481,0,0.963-0.185,1.331-0.552
			c0.734-0.734,0.734-1.926,0-2.66L31.101,29.747l3.965-3.965C36.187,26.116,37.348,26.286,38.529,26.286z M4.543,9.659l2.942-2.942
			l15.174,15.175l-2.942,2.942L4.543,9.659z M32.957,21.697L21.106,33.548h-0.01L10.745,43.898
			c-0.123,0.121-0.276,0.187-0.444,0.187c-0.146,0-0.275-0.053-0.373-0.148l-1.165-1.165c-0.215-0.216-0.195-0.582,0.04-0.819
			l10.118-10.117l0.231-0.237L31.008,19.74c0.64-0.647,0.816-1.601,0.449-2.429c-1.301-2.946-0.675-6.316,1.595-8.584
			c1.394-1.395,3.229-2.188,5.191-2.251l-1.421,1.421c-0.456,0.454-0.688,1.08-0.64,1.722l0.35,4.533
			c0.084,1.081,0.93,1.93,2.017,2.017l4.515,0.347c0.062,0.006,0.124,0.009,0.187,0.009c0.575,0,1.14-0.234,1.551-0.644l1.418-1.419
			c-0.065,1.938-0.855,3.798-2.244,5.186c-1.454,1.456-3.39,2.257-5.446,2.257c-1.091-0.001-2.146-0.224-3.133-0.66
			c-0.282-0.124-0.581-0.188-0.89-0.188C33.92,21.055,33.369,21.284,32.957,21.697z"
        />
      </g>
    </g>
  </Icon>
);

export const AboutIcon = ({ theme }: { theme: DefaultTheme }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 58 58"
  >
    <g>
      <path
        style={{ fill: theme.iconFill }}
        d="M56.939,5.366H2.51C1.123,5.366,0,6.489,0,7.875s1.123,2.51,2.51,2.51h3.096v31.961c0,1.039,0.843,1.882,1.883,1.882
		h18.025l-6.164,6.163c-0.734,0.736-0.734,1.926,0,2.662c0.734,0.734,1.926,0.734,2.661,0l7.476-7.475l7.949,7.95
		c0.368,0.367,0.85,0.552,1.332,0.552c0.48,0,0.963-0.185,1.33-0.552c0.734-0.735,0.734-1.926,0-2.661l-6.641-6.641H51.96
		c1.04,0,1.882-0.843,1.882-1.882V10.384h3.098c1.385,0,2.508-1.124,2.508-2.51S58.324,5.366,56.939,5.366z M50.078,40.464H9.369
		v-30.08h40.709V40.464z"
      />
    </g>
  </Icon>
);

export const ContactIcon = ({ theme }: { theme: DefaultTheme }) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 58 58"
  >
    <g>
      <g>
        <g>
          <path
            style={{ fill: theme.iconFill }}
            d="M27.851,55.703C12.494,55.703,0,43.208,0,27.852S12.493,0,27.851,0s27.852,12.493,27.852,27.851
				S43.208,55.703,27.851,55.703z M27.851,4.49c-12.882,0-23.362,10.48-23.362,23.362c0,12.882,10.48,23.362,23.362,23.362
				c12.883,0,23.363-10.479,23.363-23.362C51.214,14.97,40.734,4.49,27.851,4.49z"
          />
        </g>
        <path
          style={{ fill: theme.iconFill }}
          d="M24.37,28.813l4.443-4.445c0.916-0.913,2.344-0.986,3.353-0.236c0.127,0.032,0.247,0.086,0.346,0.186l1.096,1.094
			c0.711,0.711,1.861,0.711,2.572,0l3.053-3.054c0.711-0.708,0.711-1.858,0-2.57l-2.193-2.192c-2.719-2.717-7.141-2.717-9.858,0
			l-9.583,9.582c-2.718,2.719-2.718,7.143,0,9.859l2.192,2.192c0.71,0.711,1.859,0.711,2.571,0l3.053-3.053
			c0.711-0.709,0.71-1.861,0-2.57l-1.097-1.096c-0.098-0.1-0.15-0.22-0.184-0.347C23.381,31.157,23.454,29.727,24.37,28.813z"
        />
      </g>
    </g>
  </Icon>
);
