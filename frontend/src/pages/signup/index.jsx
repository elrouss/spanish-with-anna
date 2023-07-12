import RegisterForm from '../../components/forms/Autorization/AutorizationForms/RegisterForm';
import FormsContainer from '../../components/forms/Autorization/FormsContainer/FormsContainer';
import signup from '../../assets/images/signup.svg';
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
