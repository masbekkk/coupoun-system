import SessionController from './SessionController'
import Api from './Api'
import UserController from './UserController'
import UserProfileController from './UserProfileController'
import UserPasswordController from './UserPasswordController'
import UserTwoFactorAuthenticationController from './UserTwoFactorAuthenticationController'
import UserEmailResetNotificationController from './UserEmailResetNotificationController'
import UserEmailVerificationNotificationController from './UserEmailVerificationNotificationController'
import UserEmailVerificationController from './UserEmailVerificationController'

const Controllers = {
    SessionController: Object.assign(SessionController, SessionController),
    Api: Object.assign(Api, Api),
    UserController: Object.assign(UserController, UserController),
    UserProfileController: Object.assign(UserProfileController, UserProfileController),
    UserPasswordController: Object.assign(UserPasswordController, UserPasswordController),
    UserTwoFactorAuthenticationController: Object.assign(UserTwoFactorAuthenticationController, UserTwoFactorAuthenticationController),
    UserEmailResetNotificationController: Object.assign(UserEmailResetNotificationController, UserEmailResetNotificationController),
    UserEmailVerificationNotificationController: Object.assign(UserEmailVerificationNotificationController, UserEmailVerificationNotificationController),
    UserEmailVerificationController: Object.assign(UserEmailVerificationController, UserEmailVerificationController),
}

export default Controllers