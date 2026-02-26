import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // すべてのパスに対してミドルウェアを適用するが、画像やAPIは除外する
  matcher: ['/', '/(ja|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};