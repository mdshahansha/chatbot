import { React, useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import Button from "../../../components/shared/Button/Button";
import styles from "./StepPhoneEmail.module.css";
import pp from './phone-white.png'
import mm from './mail-white.png'


const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <Button
              className={`${styles.tabButton} ${
                type === 'phone' ? styles.active : ""
              }`}
              onClick={() => setType("Phone")}
            >
              <img src={pp} alt="phone" />
            </Button>
            <Button 
             className={`${styles.tabButton} ${
              type === 'email' ? styles.active : ""
            }`}
            onClick={() => setType("email")}
            >
              <img src={mm} alt="email"/> 
              </Button>
          </div>
        

        <Component onNext={onNext} />
      </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
