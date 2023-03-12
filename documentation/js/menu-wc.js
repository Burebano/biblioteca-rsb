'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">biblioteca-rsb documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ClickOutsideModule.html" data-type="entity-link" >ClickOutsideModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ClickOutsideModule-18ed79a85f102bd4c7dd66f267fea32150733532a3fb91289228839183a54969e7ed9a7d5e530f02547ada4b752bb8eccb6e4bc9931069ae3a79aae449105df9"' : 'data-target="#xs-directives-links-module-ClickOutsideModule-18ed79a85f102bd4c7dd66f267fea32150733532a3fb91289228839183a54969e7ed9a7d5e530f02547ada4b752bb8eccb6e4bc9931069ae3a79aae449105df9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ClickOutsideModule-18ed79a85f102bd4c7dd66f267fea32150733532a3fb91289228839183a54969e7ed9a7d5e530f02547ada4b752bb8eccb6e4bc9931069ae3a79aae449105df9"' :
                                        'id="xs-directives-links-module-ClickOutsideModule-18ed79a85f102bd4c7dd66f267fea32150733532a3fb91289228839183a54969e7ed9a7d5e530f02547ada4b752bb8eccb6e4bc9931069ae3a79aae449105df9"' }>
                                        <li class="link">
                                            <a href="directives/ClickOutsideDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClickOutsideDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbAccordionModule.html" data-type="entity-link" >RsbAccordionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbAccordionModule-422a649a62a8e0a337ca46e75c80254e9291e641d7957e2fa5e85e95276839bc0345f46237df34d128a1ad674503638ff0b80ca73534304c88eb3445e674408b"' : 'data-target="#xs-components-links-module-RsbAccordionModule-422a649a62a8e0a337ca46e75c80254e9291e641d7957e2fa5e85e95276839bc0345f46237df34d128a1ad674503638ff0b80ca73534304c88eb3445e674408b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbAccordionModule-422a649a62a8e0a337ca46e75c80254e9291e641d7957e2fa5e85e95276839bc0345f46237df34d128a1ad674503638ff0b80ca73534304c88eb3445e674408b"' :
                                            'id="xs-components-links-module-RsbAccordionModule-422a649a62a8e0a337ca46e75c80254e9291e641d7957e2fa5e85e95276839bc0345f46237df34d128a1ad674503638ff0b80ca73534304c88eb3445e674408b"' }>
                                            <li class="link">
                                                <a href="components/RsbAccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbAccordionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbBlockListModule.html" data-type="entity-link" >RsbBlockListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbBlockListModule-79e8f0ef3d4a749d103acb873db78c2e330d4d05c65d889472b238520b9f63330458a63068ec280ecf7b7b76e6cbfb29f2d17059fcd0e44cea7c89e7506c6f07"' : 'data-target="#xs-components-links-module-RsbBlockListModule-79e8f0ef3d4a749d103acb873db78c2e330d4d05c65d889472b238520b9f63330458a63068ec280ecf7b7b76e6cbfb29f2d17059fcd0e44cea7c89e7506c6f07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbBlockListModule-79e8f0ef3d4a749d103acb873db78c2e330d4d05c65d889472b238520b9f63330458a63068ec280ecf7b7b76e6cbfb29f2d17059fcd0e44cea7c89e7506c6f07"' :
                                            'id="xs-components-links-module-RsbBlockListModule-79e8f0ef3d4a749d103acb873db78c2e330d4d05c65d889472b238520b9f63330458a63068ec280ecf7b7b76e6cbfb29f2d17059fcd0e44cea7c89e7506c6f07"' }>
                                            <li class="link">
                                                <a href="components/RsbBlockListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbBlockListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RsbBlockListDataItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbBlockListDataItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RsbBlockListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbBlockListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbConfigModule.html" data-type="entity-link" >RsbConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' : 'data-target="#xs-injectables-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' :
                                        'id="xs-injectables-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' }>
                                        <li class="link">
                                            <a href="injectables/RsbConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' : 'data-target="#xs-pipes-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' :
                                            'id="xs-pipes-links-module-RsbConfigModule-c8c790c9dfc4bae8611792c0e38e1a506ebde973de2cf7dbbc6c39e754c9856110e2a67b19afa7d1e6674130e8ee96aa5ec9f0a951f32837131bd49703ed1f52"' }>
                                            <li class="link">
                                                <a href="pipes/RsbConfigPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbConfigPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbDetailModule.html" data-type="entity-link" >RsbDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbDetailModule-fbf1746c51bb9e864c027d1658df350d9a63b8ede66926ec33977aa193433cfe7acb815c3dd8ecb696e9f53b32a1fc495c33e66431fda5657d48afd21b52f002"' : 'data-target="#xs-components-links-module-RsbDetailModule-fbf1746c51bb9e864c027d1658df350d9a63b8ede66926ec33977aa193433cfe7acb815c3dd8ecb696e9f53b32a1fc495c33e66431fda5657d48afd21b52f002"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbDetailModule-fbf1746c51bb9e864c027d1658df350d9a63b8ede66926ec33977aa193433cfe7acb815c3dd8ecb696e9f53b32a1fc495c33e66431fda5657d48afd21b52f002"' :
                                            'id="xs-components-links-module-RsbDetailModule-fbf1746c51bb9e864c027d1658df350d9a63b8ede66926ec33977aa193433cfe7acb815c3dd8ecb696e9f53b32a1fc495c33e66431fda5657d48afd21b52f002"' }>
                                            <li class="link">
                                                <a href="components/RsbDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbDropdownModule.html" data-type="entity-link" >RsbDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbDropdownModule-386b09707146778440b9d9e06d11ef9bfc7b6db0fada91bcf43de1f95be677d636ef4b6f5e333e35daed6851588f33ae4124e4eb1be28c818a84732831f78a85"' : 'data-target="#xs-components-links-module-RsbDropdownModule-386b09707146778440b9d9e06d11ef9bfc7b6db0fada91bcf43de1f95be677d636ef4b6f5e333e35daed6851588f33ae4124e4eb1be28c818a84732831f78a85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbDropdownModule-386b09707146778440b9d9e06d11ef9bfc7b6db0fada91bcf43de1f95be677d636ef4b6f5e333e35daed6851588f33ae4124e4eb1be28c818a84732831f78a85"' :
                                            'id="xs-components-links-module-RsbDropdownModule-386b09707146778440b9d9e06d11ef9bfc7b6db0fada91bcf43de1f95be677d636ef4b6f5e333e35daed6851588f33ae4124e4eb1be28c818a84732831f78a85"' }>
                                            <li class="link">
                                                <a href="components/RsbDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbJoinPipeModule.html" data-type="entity-link" >RsbJoinPipeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-RsbJoinPipeModule-d0b09ae05290db4699e9415cc0bbf6e5d0daf53d68757537e0b83ad7f03d9dd5bb950b291965da45c68727774d86fa546f910a2c3bbb4b102618ea1a83717924"' : 'data-target="#xs-pipes-links-module-RsbJoinPipeModule-d0b09ae05290db4699e9415cc0bbf6e5d0daf53d68757537e0b83ad7f03d9dd5bb950b291965da45c68727774d86fa546f910a2c3bbb4b102618ea1a83717924"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-RsbJoinPipeModule-d0b09ae05290db4699e9415cc0bbf6e5d0daf53d68757537e0b83ad7f03d9dd5bb950b291965da45c68727774d86fa546f910a2c3bbb4b102618ea1a83717924"' :
                                            'id="xs-pipes-links-module-RsbJoinPipeModule-d0b09ae05290db4699e9415cc0bbf6e5d0daf53d68757537e0b83ad7f03d9dd5bb950b291965da45c68727774d86fa546f910a2c3bbb4b102618ea1a83717924"' }>
                                            <li class="link">
                                                <a href="pipes/RsbJoinPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbJoinPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbLibraryModule.html" data-type="entity-link" >RsbLibraryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbLibraryModule-24816abe7fe7f252299a5685d01885d45c13ce13749cb8aecf31e1b19a9cdb09c2f38fa4f06799ad56919a46e6bf4f4ba676bd8a9f93560935b1f46895f4040e"' : 'data-target="#xs-injectables-links-module-RsbLibraryModule-24816abe7fe7f252299a5685d01885d45c13ce13749cb8aecf31e1b19a9cdb09c2f38fa4f06799ad56919a46e6bf4f4ba676bd8a9f93560935b1f46895f4040e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbLibraryModule-24816abe7fe7f252299a5685d01885d45c13ce13749cb8aecf31e1b19a9cdb09c2f38fa4f06799ad56919a46e6bf4f4ba676bd8a9f93560935b1f46895f4040e"' :
                                        'id="xs-injectables-links-module-RsbLibraryModule-24816abe7fe7f252299a5685d01885d45c13ce13749cb8aecf31e1b19a9cdb09c2f38fa4f06799ad56919a46e6bf4f4ba676bd8a9f93560935b1f46895f4040e"' }>
                                        <li class="link">
                                            <a href="injectables/RsbConstantsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbConstantsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RsbThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbLoadIframeModule.html" data-type="entity-link" >RsbLoadIframeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-RsbLoadIframeModule-8dc524d4b6f521394067c56ad2c33717feb410560a0c5ecf9f5fbb08219c71ba4149f08849dd6ba2eb43f49503a5f107cc7d1a10013e605f37d6da8f9bd17732"' : 'data-target="#xs-directives-links-module-RsbLoadIframeModule-8dc524d4b6f521394067c56ad2c33717feb410560a0c5ecf9f5fbb08219c71ba4149f08849dd6ba2eb43f49503a5f107cc7d1a10013e605f37d6da8f9bd17732"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-RsbLoadIframeModule-8dc524d4b6f521394067c56ad2c33717feb410560a0c5ecf9f5fbb08219c71ba4149f08849dd6ba2eb43f49503a5f107cc7d1a10013e605f37d6da8f9bd17732"' :
                                        'id="xs-directives-links-module-RsbLoadIframeModule-8dc524d4b6f521394067c56ad2c33717feb410560a0c5ecf9f5fbb08219c71ba4149f08849dd6ba2eb43f49503a5f107cc7d1a10013e605f37d6da8f9bd17732"' }>
                                        <li class="link">
                                            <a href="directives/RsbLoadIframeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbLoadIframeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbModalModule.html" data-type="entity-link" >RsbModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' : 'data-target="#xs-components-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' :
                                            'id="xs-components-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' }>
                                            <li class="link">
                                                <a href="components/RsbModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' : 'data-target="#xs-injectables-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' :
                                        'id="xs-injectables-links-module-RsbModalModule-11687c1dd346a9183cb079a79dce0a7b874195ea251bdd5635b74823fb97831f6731ae1f083cde52636a569b50c7c86f4384caca7f56eff68999e2ee1564c760"' }>
                                        <li class="link">
                                            <a href="injectables/RsbModalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbModalService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbNgModelBaseModule.html" data-type="entity-link" >RsbNgModelBaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbNgModelBaseModule-9ca84e40991dd99d349b0257294ef78a1d3f807e812f828bb94d26c86d2ccbc20c28fb38812c66e0c74964bcc1c3e93024ce8f6de74b81819425c13f0f946e4b"' : 'data-target="#xs-components-links-module-RsbNgModelBaseModule-9ca84e40991dd99d349b0257294ef78a1d3f807e812f828bb94d26c86d2ccbc20c28fb38812c66e0c74964bcc1c3e93024ce8f6de74b81819425c13f0f946e4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbNgModelBaseModule-9ca84e40991dd99d349b0257294ef78a1d3f807e812f828bb94d26c86d2ccbc20c28fb38812c66e0c74964bcc1c3e93024ce8f6de74b81819425c13f0f946e4b"' :
                                            'id="xs-components-links-module-RsbNgModelBaseModule-9ca84e40991dd99d349b0257294ef78a1d3f807e812f828bb94d26c86d2ccbc20c28fb38812c66e0c74964bcc1c3e93024ce8f6de74b81819425c13f0f946e4b"' }>
                                            <li class="link">
                                                <a href="components/RsbNgModelBase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbNgModelBase</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbResolutionModule.html" data-type="entity-link" >RsbResolutionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' : 'data-target="#xs-directives-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' :
                                        'id="xs-directives-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' }>
                                        <li class="link">
                                            <a href="directives/RsbResolutionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbResolutionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' : 'data-target="#xs-injectables-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' :
                                        'id="xs-injectables-links-module-RsbResolutionModule-a9d4fa1ee01aebbfc31243f5a360ae5bd42fca8bf7a77697e8405179a62dcee4e730d806d424892b87a7bc3c50314d15219dc7daa4d494e13d73c212e5b7177a"' }>
                                        <li class="link">
                                            <a href="injectables/RsbResolutionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbResolutionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbSpinnerModule.html" data-type="entity-link" >RsbSpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' : 'data-target="#xs-components-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' :
                                            'id="xs-components-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' }>
                                            <li class="link">
                                                <a href="components/RsbSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' : 'data-target="#xs-injectables-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' :
                                        'id="xs-injectables-links-module-RsbSpinnerModule-7cc9b9a79616b3febd790affc3ce673d33bfd3b9de5308015eac5c5568a25561f661fba3c34280871921c305c659c703738005740d5d72cd9d273f4ede9155ad"' }>
                                        <li class="link">
                                            <a href="injectables/RsbSpinnerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbSpinnerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbTabsModule.html" data-type="entity-link" >RsbTabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbTabsModule-31c2c2e187318d2a4f30e695bcf7b705078ba8ff872a476f5f54dbf98f8edc2c76531ff7029d156c0a6083f723a1b0dab51a3f2299019144645ccbe291061a53"' : 'data-target="#xs-components-links-module-RsbTabsModule-31c2c2e187318d2a4f30e695bcf7b705078ba8ff872a476f5f54dbf98f8edc2c76531ff7029d156c0a6083f723a1b0dab51a3f2299019144645ccbe291061a53"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbTabsModule-31c2c2e187318d2a4f30e695bcf7b705078ba8ff872a476f5f54dbf98f8edc2c76531ff7029d156c0a6083f723a1b0dab51a3f2299019144645ccbe291061a53"' :
                                            'id="xs-components-links-module-RsbTabsModule-31c2c2e187318d2a4f30e695bcf7b705078ba8ff872a476f5f54dbf98f8edc2c76531ff7029d156c0a6083f723a1b0dab51a3f2299019144645ccbe291061a53"' }>
                                            <li class="link">
                                                <a href="components/RsbTabItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbTabItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RsbTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbTabsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbToastModule.html" data-type="entity-link" >RsbToastModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' : 'data-target="#xs-components-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' :
                                            'id="xs-components-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' }>
                                            <li class="link">
                                                <a href="components/RsbToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' : 'data-target="#xs-injectables-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' :
                                        'id="xs-injectables-links-module-RsbToastModule-3f5e0c5baeffd2fa19e0d551ee7ad6601294d9eac10de6e737d6af2722aed2bbe16dcb6ba9981b535d9cd7f8b8ff76c59f895f0137d02651ddc5030ac57a77bc"' }>
                                        <li class="link">
                                            <a href="injectables/RsbToastService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbToggleModule.html" data-type="entity-link" >RsbToggleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RsbToggleModule-a78c5a240a13bfa1221ae86ee7331fef90db0a4f0a02c9390d82a923aae58e6cf32b489b776b7b9e923b4bff8c05ab58fa446544d6ab3b9a1052f1b31dcf82ec"' : 'data-target="#xs-components-links-module-RsbToggleModule-a78c5a240a13bfa1221ae86ee7331fef90db0a4f0a02c9390d82a923aae58e6cf32b489b776b7b9e923b4bff8c05ab58fa446544d6ab3b9a1052f1b31dcf82ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RsbToggleModule-a78c5a240a13bfa1221ae86ee7331fef90db0a4f0a02c9390d82a923aae58e6cf32b489b776b7b9e923b4bff8c05ab58fa446544d6ab3b9a1052f1b31dcf82ec"' :
                                            'id="xs-components-links-module-RsbToggleModule-a78c5a240a13bfa1221ae86ee7331fef90db0a4f0a02c9390d82a923aae58e6cf32b489b776b7b9e923b4bff8c05ab58fa446544d6ab3b9a1052f1b31dcf82ec"' }>
                                            <li class="link">
                                                <a href="components/RsbToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbToggleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RsbTranslateModule.html" data-type="entity-link" >RsbTranslateModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' : 'data-target="#xs-injectables-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' :
                                        'id="xs-injectables-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' }>
                                        <li class="link">
                                            <a href="injectables/RsbTranslateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbTranslateService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' : 'data-target="#xs-pipes-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' :
                                            'id="xs-pipes-links-module-RsbTranslateModule-0bef108f06816dec5bbeca45271b8d0827a5a1d58f2503eb11ae2c9ad34f3f148bae644163a303d39e5a117e8771dcab20cb98a7bba67f17ef250c9fc6ae1ca8"' }>
                                            <li class="link">
                                                <a href="pipes/RsbTranslatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RsbTranslatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/RsbAccorionConstants.html" data-type="entity-link" >RsbAccorionConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbAction.html" data-type="entity-link" >RsbAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbBlockItem.html" data-type="entity-link" >RsbBlockItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbBlockListConstants.html" data-type="entity-link" >RsbBlockListConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbModalTypeConstants.html" data-type="entity-link" >RsbModalTypeConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbResolutionConstants.html" data-type="entity-link" >RsbResolutionConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbSelectedItem.html" data-type="entity-link" >RsbSelectedItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbSelectItem.html" data-type="entity-link" >RsbSelectItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbThemeConstants.html" data-type="entity-link" >RsbThemeConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbToast.html" data-type="entity-link" >RsbToast</a>
                            </li>
                            <li class="link">
                                <a href="classes/RsbToastConstants.html" data-type="entity-link" >RsbToastConstants</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/RsbConfigService.html" data-type="entity-link" >RsbConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbConstantsService.html" data-type="entity-link" >RsbConstantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbModalService.html" data-type="entity-link" >RsbModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbResolutionService.html" data-type="entity-link" >RsbResolutionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbSpinnerService.html" data-type="entity-link" >RsbSpinnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbThemeService.html" data-type="entity-link" >RsbThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbToastService.html" data-type="entity-link" >RsbToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RsbTranslateService.html" data-type="entity-link" >RsbTranslateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});