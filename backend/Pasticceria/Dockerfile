# Use an official ASP.NET Core runtime as a base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 5000
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_HTTP_PORTS=5000

# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Pasticceria.csproj", "."]
RUN dotnet restore "Pasticceria.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "Pasticceria.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Publish the application
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Pasticceria.csproj" -c $BUILD_CONFIGURATION -o /app/publish

# Create the final runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Pasticceria.dll"]