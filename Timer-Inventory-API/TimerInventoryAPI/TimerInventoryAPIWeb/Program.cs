using Data.Timer;
using Logic.Timer;

var MyAllowSpecificOrigin = "_myAllowSpecificOrigin";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigin,
                        policy =>
                        {
                            policy.WithOrigins("http://localhost:4200");
                        });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITimerData, TimerData>();

builder.Services.AddScoped<ITimerLogic, TimerLogic>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();
