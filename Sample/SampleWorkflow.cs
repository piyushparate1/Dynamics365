using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Text;
using Microsoft.Xrm.Sdk.Client;

namespace MyWorkflow
{
	public class SampleWorkflow : CodeActivity
	{
		private ITracingService trace;

		protected override void Execute(CodeActivityContext executionContext)
		{
			try
			{
				trace = executionContext.GetExtension<ITracingService>();
				IWorkflowContext context = executionContext.GetExtension<IWorkflowContext>();
				IOrganizationServiceFactory serviceFactory = executionContext.GetExtension<IOrganizationServiceFactory>();
				IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

				trace.Trace("Worklfow has been started and collected all necessary object");

				trace.Trace($"Workflow depth is {context.Depth.ToString()}");

				using (OrganizationServiceContext orgContext = new OrganizationServiceContext(service))
				{
					Process(executionContext, context, service, orgContext);
				}

				trace.Trace("Plugin execution ends");
			}
			catch (Exception ex)
			{
				trace.Trace($"{this.GetType().Name} FAILED. {ex.Message}");
				throw ex;
			}
		}

		private void Process(CodeActivityContext executionContext, IWorkflowContext context, IOrganizationService service, OrganizationServiceContext orgContext)
		{
			trace.Trace("In Process function");

			trace.Trace("Process function ends");
		}
	}
}
