const modules = {
    prisma: import("@adminjs/prisma"),
    theme: import("@adminjs/themes"),
    adapter: import('@adminjs/nestjs'),
    admin: import("adminjs")
}

const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'Danechka005',
}

const authenticate = async (email: string, password: string) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN)
    }
    return null
}

const adminInitializer = async () => {
    const moduleNames = Object.keys(modules)
    const importedModules = {};
    for(const key of moduleNames) {
        const module = await import(modules[key])

        console.log(module)
    }

    return  import("@adminjs/prisma").then((prismAdmin) => {

        return import('@adminjs/themes').then((theme) => import('@adminjs/nestjs').then(({ AdminModule }) => AdminModule.createAdminAsync({
            useFactory: () => {

                return {
                    adminJsOptions: {
                        rootPath: '/admin',
                        resources: [],
                        defaultTheme: theme.dark.id,
                        availableThemes: [theme.dark, theme.light, theme.noSidebar],
                    },
                    auth: {
                        authenticate,
                        cookieName: 'adminjs',
                        cookiePassword: 'secret'
                    },
                    sessionOptions: {
                        resave: true,
                        saveUninitialized: true,
                        secret: 'secret'
                    },
                }
            },
        })))
    })
}

export default adminInitializer