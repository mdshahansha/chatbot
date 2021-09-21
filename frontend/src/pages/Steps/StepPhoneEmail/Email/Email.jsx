import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
// import { sendOtp } from '../../../../http/index';
// import { useDispatch } from 'react-redux';
// import { setOtp } from '../../../../store/authSlice';

const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    // const dispatch = useDispatch();

    // async function submit() {
    //     const { data } = await sendOtp({ phone: phoneNumber });
    //     console.log(data);
    //     dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    //     onNext();
     


    return (
        <Card title="Enter you Email" icon="e">
            <TextInput
                value={email}
                onChange={(e)  => setEmail(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onNext} /> 
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your email, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );

    };
export default Email;