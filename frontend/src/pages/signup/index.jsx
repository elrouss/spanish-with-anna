import RegisterForm from '../../components/forms/Authorization/AuthorizationForms/RegisterForm';
import FormsContainer from '../../components/forms/Authorization/FormsContainer/FormsContainer';
import signup from '../../assets/images/signup.png';
import { signupData } from '../../utils/data/authorization';

export default function SignUpPage() {
  return (
    <FormsContainer
      image={{
        imageWidth: 379,
        imageHeight: 370,
        imageSrc: signup,
      }}
      formParaphernaliaData={signupData}
    >
      <RegisterForm />
    </FormsContainer>
  );
}
