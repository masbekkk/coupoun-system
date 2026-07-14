import AuthController from './AuthController'
import UserController from './UserController'
import DashboardController from './DashboardController'
import ProjectController from './ProjectController'
import CouponGenerationController from './CouponGenerationController'
import ProjectBatchController from './ProjectBatchController'
import ProjectCouponController from './ProjectCouponController'
import BatchReportController from './BatchReportController'

const Api = {
    AuthController: Object.assign(AuthController, AuthController),
    UserController: Object.assign(UserController, UserController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    ProjectController: Object.assign(ProjectController, ProjectController),
    CouponGenerationController: Object.assign(CouponGenerationController, CouponGenerationController),
    ProjectBatchController: Object.assign(ProjectBatchController, ProjectBatchController),
    ProjectCouponController: Object.assign(ProjectCouponController, ProjectCouponController),
    BatchReportController: Object.assign(BatchReportController, BatchReportController),
}

export default Api