from flask import Flask,render_template,request


app=Flask(__name__)

@app.route("/")

def hello():
    return render_template("checkout.html")

@app.route('/', methods=['POST'])
def thankyou():
    if request.method == 'POST':
      email =request.form["email"]
      username = request.form["username"]
    return render_template('thankyou.html')



if __name__ == "__main__":
    app.debug = True
    app.run()
