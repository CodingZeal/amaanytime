// template[tags(pages,routes)]
import { Set, Router, Route, Private } from '@redwoodjs/router'

import { LoadingOverlay } from './components/LoadingOverlay'
import { AdminLayout, RolesLayout, TeamsLayout, UsersLayout, MainLayout, ProfileLayout } from './layouts'

const Routes = () => {
  return (
    <Router>
      <Set whileLoadingPage={LoadingOverlay} whileLoadingAuth={LoadingOverlay}>
        <Route path="/login" page={LoginPage} name="login" prerender />
        <Route path="/signup" page={SignupPage} name="signup" prerender />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" prerender />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" prerender />
        <Route path="/create-password" page={CreatePasswordPage} name="createPassword" prerender />
        <Route path="/verification" page={VerificationPage} name="verification" />
        <Route path="/verification-reset" page={VerificationResetPage} name="verificationReset" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/waiting-list" page={WaitingListPage} name="waitingList" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/terms-and-conditions" page={TermsAndConditionsPage} name="termsAndConditions" />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" />
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
      </Set>
      <Set wrap={MainLayout}>
        <Route notfound page={NotFoundPage} />
        <Route path="/forbidden" page={ForbiddenPage} name="forbidden" />
      </Set>
      <Set wrap={MainLayout}>
        <Private unauthenticated="forbidden">
          <Route path="/" page={FeedPage} name="home" />
          <Route path="/user-profile/{id}" page={UserProfilePage} name="userProfile" />
          <Set wrap={ProfileLayout}>
            <Route path="/profile" page={ProfileEditProfilePage} name="profile" />
            <Route path="/profile/edit_password" page={ProfileEditPasswordPage} name="editPassword" />
            <Route path="/profile/edit_email" page={ProfileEditEmailPage} name="editEmail" />
          </Set>
        </Private>
        <Private roles="super admin" unauthenticated="forbidden">
          <Set wrap={AdminLayout}>
            <Set wrap={TeamsLayout}>
              <Route path="/admin/teams/new" page={AdminTeamNewTeamPage} name="adminNewTeam" />
              <Route path="/admin/teams/{id}/edit" page={AdminTeamEditTeamPage} name="adminEditTeam" />
              <Route path="/admin/teams/{id}" page={AdminTeamTeamPage} name="adminTeam" />
              <Route path="/admin/teams" page={AdminTeamTeamsPage} name="adminTeams" />
            </Set>
            <Set wrap={RolesLayout}>
              <Route path="/admin/roles/new" page={AdminRoleNewRolePage} name="adminNewRole" />
              <Route path="/admin/roles/{id}/edit" page={AdminRoleEditRolePage} name="adminEditRole" />
              <Route path="/admin/roles/{id}" page={AdminRoleRolePage} name="adminRole" />
              <Route path="/admin/roles" page={AdminRoleRolesPage} name="adminRoles" />
            </Set>
            <Set wrap={UsersLayout}>
              <Route path="/admin/users/new" page={AdminUserNewUserPage} name="adminNewUser" />
              <Route path="/admin/users/{id}/edit" page={AdminUserEditUserPage} name="adminEditUser" />
              <Route path="/admin/users/{id}" page={AdminUserUserPage} name="adminUser" />
              <Route path="/admin/users" page={AdminUserUsersPage} name="adminUsers" />
            </Set>
            <Set wrap={MainLayout}>
              <Route path="/questions/new" page={QuestionNewQuestionPage} name="newQuestion" />
              <Route path="/questions/{id:Int}/edit" page={QuestionEditQuestionPage} name="editQuestion" />
              <Route path="/questions/{id:Int}" page={QuestionQuestionPage} name="question" />
              <Route path="/questions" page={QuestionQuestionsPage} name="questions" />
            </Set>
          </Set>
        </Private>
      </Set>
    </Router>
  )
}

export default Routes
