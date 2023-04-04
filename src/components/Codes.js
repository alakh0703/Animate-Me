const Bounce = `
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-30px);
    }
    50% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  /* Apply the animation to the text */
  .Bounce {
    animation-name: bounce;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
  }
`;
export default Bounce;