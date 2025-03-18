from fastapi import Body, FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.responses import (
    HTMLResponse,
)
from fastapi.requests import Request
from fastapi.staticfiles import StaticFiles

app = FastAPI()

templates = Jinja2Templates(directory="app/templates")
app.mount("/static", StaticFiles(directory="app/static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse(
        "index.html", {"request": request, "current_page": "index"}
    )
