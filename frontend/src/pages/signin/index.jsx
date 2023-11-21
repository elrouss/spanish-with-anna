import LoginForm from '../../components/forms/Authorization/AuthorizationForms/LoginForm';
import FormsContainer from '../../components/forms/Authorization/FormsContainer/FormsContainer';
import signin from '../../assets/images/signin.png';
import { signinData } from '../../utils/data/authorization';

export default function SignInPage() {
  return (
    <FormsContainer
      image={{
        imageWidth: 342,
        imageHeight: 370,
        imageSrc: signin,
      }}
      formParaphernaliaData={signinData}
    >
      <LoginForm />
    </FormsContainer>
  );
}
