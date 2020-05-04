function getAllDataArticles() {
    fetch("http://localhost:8000/meetings")
        .then(response => response.json())
        .then(data => this.setState({items: data}))
}