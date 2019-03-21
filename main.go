package main

import (
	"fmt"
	"log"
	"net/http"
)

func handleLogin(w http.ResponseWriter, r *http.Request) {
	userName, ok := r.URL.Query()["username"]
	if !ok {
		fmt.Println("ddd")
		s := `
		{
			"ErrorCode": 1,
			"ErrorMsg": "用户名不存在"
		}
		`
		fmt.Fprintf(w, s)
		return
	}
	fmt.Println(userName[0])

	password, ok := r.URL.Query()["password"]
	if !ok {
		fmt.Println("aaa")
		s := `
		{
			"ErrorCode": 2,
			"ErrorMsg": "密码不可以为空"
		}
		`
		fmt.Fprintf(w, s)
		return
	}
	fmt.Println(password[0])

	if userName[0] == "xiaobaobei" && password[0] == "123456" {
		s := `
		{
			"ErrorCode": 0,
			"ErrorMsg": ""
		}
		`
		fmt.Fprintf(w, s)
		return
	} else {
		s := `
		{
			"ErrorCode": 3,
			"ErrorMsg": "用户名密码不匹配"
		}
		`
		fmt.Fprintf(w, s)
		return
	}
}

func handleGetList(w http.ResponseWriter, r *http.Request) {
	s := `
		{
			"ErrorCode": 0,
			"ErrorMsg": "",
			"Result": [
				{
					"Title": "这是第一个标题",
					"Content": "这是第一个内容"
				},
				{
					"Title": "这是第二个标题",
					"Content": "这是第二个内容"
				}
			]
		}
	`
	fmt.Fprintf(w, s)
}
func main() {
	fmt.Println("Hello")
	http.HandleFunc("/login", handleLogin)

	http.HandleFunc("/getList", handleGetList)

	fs := http.FileServer(http.Dir("./web/www/"))
	http.Handle("/", fs)

	log.Println("Listening...")
	http.ListenAndServe(":8080", nil)
}
