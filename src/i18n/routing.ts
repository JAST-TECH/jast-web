import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['ja', 'en'], // 対応する言語
  defaultLocale: 'ja'    // デフォルトの言語
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);