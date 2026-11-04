// DEV-0004: abre o chat de diagnóstico de qualquer lugar do site (o botão "Fazer diagnóstico"
// da DEV-0005 chama isto). O componente fica montado uma vez no App.tsx.
export const EVENTO_ABRIR = "brhorn:abrir-diagnostico";

export function abrirDiagnostico() {
  window.dispatchEvent(new CustomEvent(EVENTO_ABRIR));
}
