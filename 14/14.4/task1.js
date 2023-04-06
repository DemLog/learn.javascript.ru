let user = {
    name: "John",
    go: function() { alert(this.name) }
}

(user.go)() // ошибка!

// Нужна точка с запятой после let user = {};