{"StartTimeUtc":"2020-05-27T18:58:30.1575591Z","EndTimeUtc":"2020-05-27T18:58:40.9205196Z","Status":"Failed","Name":"Update Plugins","Key":"PluginUpdates","Id":"c27fda37dfb6e39be141191aaa1c3060","ErrorMessage":"Resource temporarily unavailable","LongErrorMessage":"   at System.Net.Http.ConnectHelper.ConnectAsync(String host, Int32 port, CancellationToken cancellationToken)\n   at System.Net.Http.HttpConnectionPool.ConnectAsync(HttpRequestMessage request, Boolean allowHttp2, CancellationToken cancellationToken)\n   at System.Net.Http.HttpConnectionPool.CreateHttp11ConnectionAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n   at System.Net.Http.HttpConnectionPool.GetHttpConnectionAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n   at System.Net.Http.HttpConnectionPool.SendWithRetryAsync(HttpRequestMessage request, Boolean doRequestAuth, CancellationToken cancellationToken)\n   at System.Net.Http.RedirectHandler.SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)\n   at System.Net.Http.HttpClient.FinishSendAsyncBuffered(Task`1 sendTask, HttpRequestMessage request, CancellationTokenSource cts, Boolean disposeCts)\n   at Emby.Server.Implementations.HttpClientManager.HttpClientManager.SendAsyncInternal(HttpRequestOptions options, HttpMethod httpMethod)\n   at Emby.Server.Implementations.HttpClientManager.HttpClientManager.SendAsync(HttpRequestOptions options, HttpMethod httpMethod)\n   at Emby.Server.Implementations.Updates.InstallationManager.GetAvailablePackages(CancellationToken cancellationToken)\n   at Emby.Server.Implementations.Updates.InstallationManager.GetAvailablePluginUpdates(CancellationToken cancellationToken)+MoveNext()\n   at Emby.Server.Implementations.Updates.InstallationManager.GetAvailablePluginUpdates(CancellationToken cancellationToken)+System.Threading.Tasks.Sources.IValueTaskSource<System.Boolean>.GetResult()\n   at System.Linq.AsyncEnumerable.<ToListAsync>g__Core|620_0[TSource](IAsyncEnumerable`1 source, CancellationToken cancellationToken) in d:\\a\\1\\s\\Ix.NET\\Source\\System.Linq.Async\\System\\Linq\\Operators\\ToList.cs:line 27\n   at System.Linq.AsyncEnumerable.<ToListAsync>g__Core|620_0[TSource](IAsyncEnumerable`1 source, CancellationToken cancellationToken) in d:\\a\\1\\s\\Ix.NET\\Source\\System.Linq.Async\\System\\Linq\\Operators\\ToList.cs:line 27\n   at Emby.Server.Implementations.ScheduledTasks.PluginUpdateTask.Execute(CancellationToken cancellationToken, IProgress`1 progress)\n   at Emby.Server.Implementations.ScheduledTasks.ScheduledTaskWorker.ExecuteInternal(TaskOptions options)"}