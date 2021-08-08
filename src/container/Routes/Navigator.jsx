

const PUSH = (context, path) => {
    context.history.push(path)
}

const push = (context, path) => PUSH(context, path)

const Navigator = {
    push
}

export default Navigator
