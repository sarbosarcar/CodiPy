from flask import Flask, request
from flask.templating import render_template
import os

app = Flask(__name__, template_folder='templates')


@app.get('/query_t')
def get_query():
    command = '''The code generated will be displayed here. This is some sample
              text used for filling the space.'''
    return render_template('query.html', command=command)


@app.post('/query_t')
def post_query():
    lang = request.form.get('lang')
    command = request.form.get('command').lower()
    query = f'write a program in {lang} to {command}'
    # print(query)
    # print(request.form)
    import os
    import openai

    openai.api_key = os.getenv("OPENAI_API_KEY")

    response = openai.Completion.create(
        model="code-cushman-001",
        prompt=f"{query}",
        temperature=0,
        max_tokens=2000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    ).choices[0].text

    return render_template('query.html', response=response, command=command)


if __name__ == '__main__':
    app.run(debug=True)
