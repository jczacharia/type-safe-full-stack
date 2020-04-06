#   ## Backend  ##
# Core layers
yarn ng generate @nrwl/nest:library --name=application-services --directory=backend/core --tags=platform:backend,layer:application-services --no-interactive &&
yarn ng generate @nrwl/nest:library --name=domain-services --directory=backend/core --tags=platform:backend,layer:domain-services --no-interactive &&
yarn ng generate @nrwl/nest:library --name=domain --directory=backend/core --tags=platform:backend,layer:domain --no-interactive &&

# Outer layers
yarn ng generate @nrwl/nest:library --name=infrastructure --directory=backend --tags=platform:backend,layer:infrastructure --no-interactive &&
yarn ng generate @nrwl/nest:library --name=shell --directory=backend --tags=platform:backend,layer:shell --no-interactive &&
yarn ng generate @nrwl/nest:library --name=ui-rest --directory=backend --tags=platform:backend,layer:ui --no-interactive &&


#  ## Shared  ##
yarn ng generate @nrwl/workspace:library --name=domain --directory=shared --tags=platform:any,scope:shared,type:domain,layer:domain --no-interactive &&
yarn ng generate @nrwl/workspace:library --name=utils --directory=shared --tags=platform:any,scope:shared,type:utils,layer:utils --no-interactive &&


# ## Frontend  ##
# Public
yarn ng generate @nrwl/angular:library --name=data-access --style=scss --directory=frontend/public --tags=platform:frontend,scope:public,type:data-access --no-interactive &&
yarn ng generate @nrwl/angular:library --name=feature-login --style=scss --directory=frontend/public --tags=platform:frontend,scope:public,type:feature --no-interactive &&
yarn ng generate @nrwl/angular:library --name=shell --style=scss --directory=frontend/public --tags=platform:frontend,scope:public,type:shell --no-interactive &&

# Portal
yarn ng generate @nrwl/angular:library --name=data-access --style=scss --directory=frontend/portal --tags=platform:frontend,scope:portal,type:data-access --no-interactive &&
yarn ng generate @nrwl/angular:library --name=feature-home --style=scss --directory=frontend/portal --tags=platform:frontend,scope:portal,type:feature --no-interactive &&
yarn ng generate @nrwl/angular:library --name=shell --style=scss --directory=frontend/portal --tags=platform:frontend,scope:portal,type:shell --no-interactive &&

# Shared
yarn ng generate @nrwl/angular:library --name=data-access --style=scss --directory=frontend/shared --tags=platform:frontend,scope:shared,type:data-access --no-interactive
