// import styled from "styled-components";

// const input = document.querySelector('#login')

// const Login: React.FC = () => {

//     return(
//       <Container>
//         <form>
//           <label>
//             Mot de passe : 
//           </label>
//             <input type="text" name="name" id="login" />
//           <input type="submit" value="Envoyer" />
//         </form>
//       </Container>
//     );
// };

// const Container = styled.div``;

// export default Login;

import styled from "styled-components";
import React from "react";

const Login: React.FC = () => {
  const [buttonActive, setButtonActive] = React.useState<boolean>(false);

  const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const comparisonString = '667';
    const { value } = event.target;

    if (value === comparisonString) {
      window.location.href='http://127.0.0.1:8000/admin'
      // setButtonActive(true);
    }else{
      // setButtonActive(false);
    }
  }, []);

  return (
    <Container>
      <Label>Connecter vous sur l'espace d'admin </Label>
      <Input type="password" onChange={handleInputChange}></Input>
      {/* {buttonActive ? <a href="http://127.0.0.1:8000/admin"></a> : <a>un autre bouton</a>} */}
    </Container>
  );
};

const Input = styled.input`
  width: 300px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 24px;
`;

export default Login;