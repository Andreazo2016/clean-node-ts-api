# Clean Typescript Node API
API REST desenvolvido em Node/Typescript utilizando os concenceitos de Clean Architecture

## Descriptions Layers
 
<b>entities</b> => Vai conter todos as entidades da aplicação </br>
<b>gateways</b> => vai conter todos os contratos/interfaces que a camada de usecase vai precisar. Isso é para que a camada de usecase dependa de uma abstração e não de uma implementação.</br>
<b>infra</b> => Vai conter as tecnologias que serão usada no projeto. Implementação da camada de gateways ou outras.</br>
<b>main</b> => Vai conter as a composições da aplicação, montar as dependencias.</br>
<b>presentation</b> => Camada que vai fazer a intermediação entre o mundo externo e interno. Vai ter controllers que vão fazer input e validação dos dados para passar para a camada de usecases.</br>
<b>usecases</b> => Camada que vai conter a regra de negocio da aplicação em si.