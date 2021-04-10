type handleNavigateToHome = () => void
type handleCVDownload = () => void

export interface ButtonProps {
  HandleButtonOnClickFunctions: handleNavigateToHome | handleCVDownload
  title: 'Baixar currículo' | 'Voltar para Home'
}

export interface CardDetailsProps {
  year: string | 'Error'
  type: string
  tagColor: 'normal' | 'highlighted'
}

export interface BlogPostDetailsProps {
  type: string
  formatedDate: string
}
