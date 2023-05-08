import { SidebarLayout } from '@/layouts/SidebarLayout';
import { Title } from '@/components/Meta';
import { documentationNav } from '@/navs/documentation';
import Seo from "@/components/core/Seo/Seo";

export function DocumentationLayout(props) {
  return (
    <>
      <Seo 
        title={props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      />
      <SidebarLayout nav={documentationNav} {...props} />
    </>
  )
}

DocumentationLayout.nav = documentationNav
