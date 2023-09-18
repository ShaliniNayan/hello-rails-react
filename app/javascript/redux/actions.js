export const fetchRandomGreeting = () => {
    return (dispatch) => {
      fetch('/random_greeting')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_GREETING', payload: data.greeting });
        });
    };
  };
  