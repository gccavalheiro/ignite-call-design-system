import Styled from './styles'

export interface MultiStepProps {
  steps: number
  currentStep: number
  onStepClick: (step: number) => void
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <Styled.Root>
      <Styled.Label>
        Passo {currentStep} de {steps}
      </Styled.Label>
      <Styled.Steps css={{ '--multiStep-steps': steps }}>
        {Array.from({ length: steps }, (_, indice) => indice + 1).map(
          (step) => {
            return (
              <Styled.Step
                key={step}
                active={currentStep >= step}
              ></Styled.Step>
            )
          },
        )}
      </Styled.Steps>
    </Styled.Root>
  )
}

MultiStep.displayName = 'MultiStep'
