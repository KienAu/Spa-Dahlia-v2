export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/index-french.html') {
        return navigateTo('/fr/accueil');
    }
    if (to.path === '/fr/') {
        return navigateTo('/fr/accueil');
    }
    if (to.path === '/fr') {
        return navigateTo('/fr/accueil');
    }

    if (to.path === '/index.html') {
        return navigateTo('/');
    }

    if (to.path === '/&sa=U&ved=0ahUKEwjqwNLFhsruAhVFcBQKHfKCCTcQ61gIsEgoEDDaAQ&usg=AOvVaw1wLafaXIYKRi5KtgsnUirs') {
        return navigateTo('/');
    }

    if (to.path === '/en/') {
        return navigateTo('/');
    }

    if (to.path === '/en/our-services/manicure-pedicure/') {
        return navigateTo('/');
    }

    if (to.path === '/?pageid=2') {
        return navigateTo('/');
    }

    if (to.path === '/?pageid=1') {
        return navigateTo('/');
    }

    if (to.path === '/?pageid=6') {
        return navigateTo('/');
    }

    if (to.path === '/wp-content/themes/dreamspa/framework/sociable_shortcodes.php') {
        return navigateTo('/');
    }

});