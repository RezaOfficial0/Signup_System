import React,{ Component } from 'react'
import axios from 'axios';
import { signup , changeLanguage } from '../api/ApiCalls'
import Input from '../Components/Input'
import { withTranslation, WithTranslation } from 'react-i18next'
 class SignupPage extends Component {
state  = {
     username : null,
     displayName : null,
     password : null,
     passwordRepeat : null,
     pendingApiCall : false,
     errors : {}
} 
     onchange = event => {
          const { t }= this.props;
          const {name,value} = event.target;
          const errors = { ... this.state.errors}
          errors[name] = undefined;
          if(name === 'password' || name === 'passwordRepeat'){
               if(name === 'password' && value !== this.state.passwordRepeat){
                    errors.passwordRepeat = t('Password Mismatch');
               } else if(name === 'passwordRepeat' && value !== this.state.password){
                 errors.passwordRepeat=t('Password Mismatch');
               }else {
                    errors.passwordRepeat=undefined;
               }
          }
          this.setState({
               [name]:value,
               errors
          
          });
     };
     onclickSignup = async event => { 
          event.preventDefault();
          const{username,displayName,password} = this.state;
          const body = {
               username,
               displayName,
               password 
          }
          this.setState({pendingApiCall : true})
            
          try {
               const response = await signup(body);
          }catch(error) {
               if(error.response.data.validationErrors){
              this.setState({ errors : error.response.data.validationErrors});
          }
          }
          this.setState({pendingApiCall : false});
     };

     onChangeLanguage = language => {
const { i18n } = this.props;
i18n.changeLanguage(language)
changeLanguage(language);
     }

  render() {
const {pendingApiCall , errors} = this.state;
const { username , displayName , password , passwordRepeat } = errors;
const { t } = this.props;
    return (
      <div className='container'>
          <form>
          <h1 className="text-center">{t('Sign up')}</h1>

          <Input name="username" label={t("Enter Username")} error={username} onchange={this.onchange}/>
           
          <Input name="displayName" label={t("Enter Display Name")} error={displayName} onchange={this.onchange} />

          <Input name="password" label={t("Enter Password")} error={password} onchange={this.onchange} />

          <Input name="passwordRepeat" label={t("Repeat Password")} error={passwordRepeat} onchange={this.onchange} />
             

               <div className='text-center'>
            <button className='btn btn-primary' onClick={this.onclickSignup} disabled={pendingApiCall || passwordRepeat !== undefined}>
              {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{t('Sign up')}</button>
            </div>
            <div>
               <img src='https://countryflagsapi.com/png/tr/' width='50' alt='Turkish Flag' onClick={() =>this.onChangeLanguage('tr')} style={{cursor: 'pointer'}}></img>
               <img src='https://countryflagsapi.com/png/us/' width='65' alt='USA Flag' onClick={() =>this.onChangeLanguage('en')} style={{cursor: 'pointer'}}></img>
               <img src='https://countryflagsapi.com/png/fr/' width='50' alt='USA Flag' onClick={() =>this.onChangeLanguage('fr')} style={{cursor: 'pointer'}}></img>
            </div>

          </form>
      </div>
    )
  }
}
const UserSingupPageWithTranslation = withTranslation()(SignupPage);
export default UserSingupPageWithTranslation;
