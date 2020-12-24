import React from 'react';
import './LoginForm.css';

class SigninForm extends React.Component{
    render(){
        return(
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />
                    <div className={'imageText bold style1'}>ZINE</div>
                    <div className={'imageText style2'}>Where imagination leads to creation</div>
                </div>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth'}>Singn in to Zine chat</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'text'} placeholder={'Username'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'password'} placeholder={'Password'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'email'} placeholder={'Email'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'text'} placeholder={'College ID'} />
                        </div>
                        <div className={'contentBox'}>
                            <div className={'checkboxBox'}>
                                <input type={'checkbox'} className={'checkbox'} />
                                <label className={'checkboxLabel'}>Remember</label>
                            </div>
                            <div className={'text1'}>Forgot Password</div>
                        </div>
                        <div className={'btnAuth'}>Sign in</div>
                        <div className={'borderBox'}>
                            <div className={'line'} />       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigninForm;