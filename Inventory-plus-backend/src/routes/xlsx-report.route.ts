import { Router } from 'express'
import { isAuth } from '../middlewares/isAuth.middleware'
import { authorizeRoles } from '../middlewares/authorizeRoles.middleware'
import {
  downloadInventoryReport,
  downloadProvidersReport,
  downloadSalesReport,
  downloadFluctuationReport,
  downloadUserReport,
  downloadTopProductsReport
} from '../controllers/xlsxReport.controller'

const router = Router()

router.get(
  '/sales-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadSalesReport
)

router.get(
  '/providers-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadProvidersReport
)

router.get(
  '/inventory-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadInventoryReport
)

router.get(
  '/fluctuation-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadFluctuationReport
)

router.get(
  '/user-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadUserReport
)

router.get(
  '/top-products-report',
  isAuth,
  authorizeRoles(['admin', 'inventory', 'seller']),
  downloadTopProductsReport
)
export default router
