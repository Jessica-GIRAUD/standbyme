import React from 'react';
import { getTranslations } from 'next-intl/server';
import Building from '@/components/others/Building';

export default async function SavoirFaire() {
  const t = await getTranslations('construction');
  return <Building />;
}
